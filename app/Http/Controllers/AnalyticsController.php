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
     *** return the data of sessions from google analytics
     *** @return Illumination/Collection
     */
    public function sessions(Request $request, $id = "0")
    {
        $now = Carbon::now();
        $date = $now->toArray();
        //get the session date by date
        $last7Sessions = Analytics::performQuery(Period::days(7), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);
        $last28Sessions = Analytics::performQuery(Period::days(28), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);
        $last30Sessions = Analytics::performQuery(Period::days(30), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);

        $seriesData = [
            '0' => self::makeSeriesData($last7Sessions),
            '1' => self::makeSeriesData($last28Sessions),
            '2' => self::makeSeriesData($last30Sessions),
        ];

        $analyticsData = Analytics::performQuery(Period::years(1), 'ga:', ['metrics' => 'ga:sessions, ga:users']);

        $data = [
            'goal' => 1000,
            'growth' => '+5.2%',
            'duration' => '1',
            'retention' => 90,
            'lastDays' => [
                '0' => "Last 28 Days",
                '1' => "Last Month",
                '2' => "Last Year",
            ],
            'salesbar' => $seriesData,
            'sessions' => isset($analyticsData['rows'][0][0]) ? $analyticsData['rows'][0][0] : 0,
            'users' => isset($analyticsData['rows'][0][1]) ? $analyticsData['rows'][0][1] : 0,
        ];
        return $data;
    }

    /*
     *** return the data for series
     *** @param Illumination/Collection
     *** @return Illumination/Collection
     */
    private function makeSeriesData($data)
    {
        $result = [];
        if (isset($data['rows']) && sizeof($data['rows']) > 0) {
            for ($i = 0; $i < sizeof($data['rows']); $i++) {
                array_push($result, $data['rows'][$i][1]);
            }
        }
        return ['data' => $result, 'name' => 'Sessions'];
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
                'metrics' => 'ga:users',
            ]);
        $now = Carbon::now();
        $date = $now->toArray();
        $monthsData = [];
        for ($i = 1; $i <= $date['month']; $i++) {
            $days = cal_days_in_month(CAL_GREGORIAN, $i, $date['year']);
            $startDate = "{$date['year']}/{$i}/01";
            $startDate = Carbon::createFromFormat('Y/m/d', $startDate);
            $endDate = "{$date['year']}/{$i}/{$days}";
            $endDate = Carbon::createFromFormat('Y/m/d', $endDate);
            if ($i == $date['month']) {
                $endDate = $now;
            }

            $monthUsers = Analytics::performQuery(Period::create($startDate, $endDate), 'ga:', [
                'metrics' => 'ga:users',
            ]);
            if (isset($monthUsers['rows']) && isset($monthUsers['rows'][0])) {
                array_push($monthsData, $monthUsers['rows'][0][0]);
            } else {
                array_push($monthsData, 0);
            }
        }
        $data = [
            'analyticsData' => [
                'subscribers' => $analyticsData['rows'][0][0] ? $analyticsData['rows'][0][0] : 0,
            ],
            'series' => [
                'data' => $monthsData,
                'name' => 'Users',
            ],
        ];
        return response()->header('Content-type: application/json; charset=utf-8')->json($data);
    }
}
