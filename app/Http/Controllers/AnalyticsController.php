<?php

namespace App\Http\Controllers;

use Analytics;
use Carbon\Carbon;
use DateTime;
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
        $data = [];
        if (sizeof($analyticsData) > 0) {
            foreach ($analyticsData as $row) {
                $date = new DateTime($row['date']);
                $row['date'] = $date->format('Y-m-d');
                array_push($data, $row);
            }
        }
        return $data;
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
        $startDate = Carbon::now()->subYear();
        $endDate = Carbon::now();
        // return the users and page views by countris for the last 1 year.
        $analyticsData = Analytics::performQuery(Period::create($startDate, $endDate), 'ga:sessions', ['metrics' => 'ga:users, ga:pageviews', 'dimensions' => 'ga:country']);
        $data = [];
        if (isset($analyticsData['rows']) && sizeof($analyticsData['rows']) > 0) {
            foreach ($analyticsData['rows'] as $row) {
                array_push($data, ['country' => $row[0], 'users' => $row[1], 'pageViews' => $row[2]]);
            }
        }

        return $data;
    }

    /*
     *** return the data of sessions from google analytics
     *** @return Illumination/Collection
     */
    public function sessions(Request $request, $id = "0")
    {
        //get the session date by date
        $last7Sessions = Analytics::performQuery(Period::days(6), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);
        $last28Sessions = Analytics::performQuery(Period::days(28), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);
        $last30Sessions = Analytics::performQuery(Period::days(30), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);
        $last1yearSessions = Analytics::performQuery(Period::years(1), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:date']);
        $seriesData = [
            '0' => self::makeSeriesData($last7Sessions),
        ];

        $analyticsData = Analytics::performQuery(Period::years(1), 'ga:', ['metrics' => 'ga:sessions, ga:users']);

        $data = [
            'goal' => 1000,
            'growth' => '+5.2%',
            'duration' => '1',
            'retention' => 90,
            'lastDays' => [
                '0' => "Last 7 Days",
                '1' => "Last 28 days",
                '2' => "Last a month",
                '2' => "Last a Year",
            ],
            'salesBar' => [
                'series' => $seriesData,
            ],
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
                'subscribers' => isset($analyticsData['rows']) && isset($analyticsData['rows'][0]) && isset($analyticsData['rows'][0][0]) ? $analyticsData['rows'][0][0] : 0,
            ],
            'series' => [
                [
                    'data' => $monthsData,
                    'name' => 'Users',
                ],
            ],
        ];
        return $data;
    }

    /*
     *** return sessions by device for the last 1 week.
     *** @return Illumination/Collection
     */
    public function sessionsByDevice(Request $request)
    {
        // get sessions by device for the last 1 week.
        $last7Sessions = Analytics::performQuery(Period::days(6), 'ga:', ['metrics' => 'ga:sessions', 'dimensions' => 'ga:deviceCategory']);

        $data = [0, 0];
        if (isset($last7Sessions['rows']) && sizeof($last7Sessions['rows']) > 0) {
            foreach ($last7Sessions['rows'] as $row) {
                if (isset($row[0]) && $row[0] == 'desktop') {
                    $data[0] = $row[1] ? (int) $row[1] : 0;
                }
                if (isset($row[0]) && $row[0] == 'mobile') {
                    $data[1] = $row[1] ? (int) $row[1] : 0;
                }
            }
        }
        return $data;
    }

    /*
     *** return statistics data for the last 1 week.
     *** @return Illumination/Collection
     */
    public function statistics(Request $request)
    {
        // get data for the last 1 week.
        $last7Users = Analytics::performQuery(Period::days(6), 'ga:', ['metrics' => 'ga:users']);
        $last7NewUsers = Analytics::performQuery(Period::days(6), 'ga:', ['metrics' => 'ga:newUsers']);
        $last7Sessions = Analytics::performQuery(Period::days(6), 'ga:', ['metrics' => 'ga:bounceRate']);
        $last7PageviewsPerSession = Analytics::performQuery(Period::days(6), 'ga:', ['metrics' => 'ga:pageviewsPerSession']);

        $data = [];
        if (isset($last7Users['rows']) && sizeof($last7Users['rows']) > 0) {
            $data[0] = $last7NewUsers['rows'][0][0] / $last7Users['rows'][0][0] * 100;
        } else {
            $data[0] = 0;
        }
        $data[1] = isset($last7Sessions['rows']) && sizeof($last7Sessions['rows']) > 0 ? $last7Sessions['rows'][0][0] : 0;
        $data[2] = isset($last7PageviewsPerSession['rows']) && sizeof($last7PageviewsPerSession['rows']) > 0 ? $last7PageviewsPerSession['rows'][0][0] : 0;

        return $data;
    }
}
