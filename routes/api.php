<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Orders;

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
    return 'User '.$id;

});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [Orders::class, 'login']);
    Route::post('register', [Orders::class, 'register']);
    Route::get('omni', [Orders::class, 'omni']);

    Route::group(['middleware' => 'auth:api'], function() {
      Route::get('logout', [Orders::class, 'logout']);
    });
});