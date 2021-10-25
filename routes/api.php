<?php

use App\Http\Controllers\AnalyticsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => 'analytics'], function () {
    Route::get('visitors', [AnalyticsController::class, 'visitors']);
    Route::get('countries', [AnalyticsController::class, 'countries']);
    Route::get('browsers', [AnalyticsController::class, 'topBrowsers']);
    Route::get('users', [AnalyticsController::class, 'users']);
    Route::get('sessions', [AnalyticsController::class, 'sessions']);
});
