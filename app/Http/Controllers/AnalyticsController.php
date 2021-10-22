<?php

namespace App\Http\Controllers;

use Analytics;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\Analytics\Period;

class AnalyticsController extends Controller
{
    /*
     *** return the data of visitors from google analytics
     *** @return Illumination/Collection
     */
    public function visitors(Request $request)
    {
        $startDate = Carbon::now()->subYear();
        $endDate = Carbon::now();

        $analyticsData = Analytics::fetchVisitorsAndPageViews(Period::create($startDate, $endDate));
        return $analyticsData;
    }

    /*
     *** return the data of top browsers from google analytics
     *** @return Illumination/Collection
     */
    public function topBrowsers(Request $request)
    {
        $startDate = Carbon::now()->subYear();
        $endDate = Carbon::now();

        $analyticsData = Analytics::fetchTopBrowsers(Period::create($startDate, $endDate));
        return $analyticsData;
    }

    /*
     *** return the data of countries from google analytics
     *** @return Illumination/Collection
     */
    public function countries(Request $request)
    {
        $analyticsData = Analytics::performQuery(Period::years(1), 'ga:sessions', ['metrics' => 'ga:sessions, ga:pageviews', 'dimensions' => 'ga:country']);
        return $analyticsData['rows'];
    }

    /*
     *** return the data of users from google analytics
     *** @return Illumination/Collection
     */
    public function users(Request $request)
    {
        $analyticsData = Analytics::performQuery(Period::years(1),
            'ga:',
            [
                'metrics' => 'ga:users,ga:newUsers,ga:sessions,ga:sessionsPerUser,ga:pageviews,ga:pageviewsPerSession,ga:avgSessionDuration,ga:bounceRate',
                'dimensions' => 'ga:pageTitle',
                // 'start-date' => '2018-08-01',
                // 'end-date' => '2018-08-31',
            ]);
        return $analyticsData['rows'];
    }
}
