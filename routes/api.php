<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\Content;
use App\Http\Controllers\ContentCrawler;
use App\Http\Controllers\Orders;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\Analytics\Period;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/order/{id}', [Orders::class, 'getorder'], function (Request $request, $id) {
    return 'User ' . $id;

});

Route::get('/content/{id}', [Content::class, 'getorder'], function (Request $request, $id) {
    return 'User ' . $id;

});

Route::get('/svg/{file}/{id}', [ContentCrawler::class, 'getsvg'], function (Request $request, $file, $id) {
    return 'file' . $file;
    return 'id ' . $id;

});

Route::get('/svgfull/{file}', [ContentCrawler::class, 'getsvgfull'], function (Request $request, $file) {
    return 'file' . $file;

});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [Orders::class, 'login']);
    Route::post('register', [Orders::class, 'register']);
    Route::get('content', [Content::class, 'getcontent']); //content api
    Route::get('getproduct', [Orders::class, 'getproduct']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', [Orders::class, 'logout']);
    });
});

Route::group(['prefix' => 'analytics'], function () {
    Route::get('visitors', [AnalyticsController::class, 'visitors']);
    Route::get('countries', [AnalyticsController::class, 'countries']);
});

Route::get('/', function () {
    $startDate = Carbon::now()->subYear();
    $endDate = Carbon::now();

    $analyticsData = Analytics::fetchVisitorsAndPageViews(Period::create($startDate, $endDate));
    return $analyticsData;
});
