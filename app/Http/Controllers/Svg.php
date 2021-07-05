<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;


class Svg extends Controller
{
    function getsvg(Request $request)
    {

        $client = new Client([
            'base_uri' => 'https://cdn.shopify.com/'
        ]);
    $response = $client->request('GET', 's/files/1/0489/0168/5406/files/test.svg'); 
        echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
        

    }

}