<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;

class Orders extends Controller

{
        function getsvg(Request $request)
        {
    
            $client = new Client([
                'base_uri' => 'https://cdn.shopify.com/'
            ]);
        $response = $client->request('GET', 's/files/1/0489/0168/5406/files/test.svg'); 
            echo $response->getBody()->getContents(); // '{"id": 1420053, "name": "guzzle", ...}'
            
    
        }
    
    function getproduct(Request $request)
    {
        $stack = HandlerStack::create();

        $middleware = new Oauth1([
           'consumer_key'    => 'qnnopm2yvhknuq6i0p2mjfnpjsx5os9g',
           'consumer_secret' => '52ivyu7txij9m1izyf7ups8nlsy0naqx',
           'token'           => 'vfxnnm89z5j8y427gzzt5gvwi3gpl7vp',
           'token_secret'    => 'lt5fxack3lfisdlhm6wh9w69v3t9f46d'
       ]);
       
        $stack->push($middleware);
       
        $client = new Client([
            'base_uri' => 'http://54.74.138.56/index.php/rest/default/V1/',
            'handler' => $stack,
            'auth' => 'oauth'
        ]);
    $response = $client->request('GET', 'products?Page=1&searchCriteria[pageSize]=12&searchCriteria[sortOrders][[0][direction]=DESC'); 
        echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
        

    }

function omni(Request $request)
    {
        $stack = HandlerStack::create();

        $middleware = new Oauth1([
            'consumer_key'    => 'qnnopm2yvhknuq6i0p2mjfnpjsx5os9g',
            'consumer_secret' => '52ivyu7txij9m1izyf7ups8nlsy0naqx',
            'token'           => 'vfxnnm89z5j8y427gzzt5gvwi3gpl7vp',
            'token_secret'    => 'lt5fxack3lfisdlhm6wh9w69v3t9f46d'
       ]);
       
        $stack->push($middleware);
       
        $client = new Client([
            'base_uri' => 'http://54.74.138.56/index.php/rest/default/V1/',
            'handler' => $stack,
            'auth' => 'oauth'
        ]);
    $response = $client->request('GET', 'orders?searchCriteria[pageSize]=12&searchCriteria[currentPage]=1&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[sortOrders][0][direction]=DESC'); 
        echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
        

    }

    public function getorder(Request $request, $id)
    {
        $stack = HandlerStack::create();

        $middleware = new Oauth1([
            'consumer_key'    => 'qnnopm2yvhknuq6i0p2mjfnpjsx5os9g',
            'consumer_secret' => '52ivyu7txij9m1izyf7ups8nlsy0naqx',
            'token'           => 'vfxnnm89z5j8y427gzzt5gvwi3gpl7vp',
            'token_secret'    => 'lt5fxack3lfisdlhm6wh9w69v3t9f46d'
       ]);
       
        $stack->push($middleware);
       
        $client = new Client([
            'base_uri' => 'http://54.74.138.56/index.php/rest/default/V1/',
            'handler' => $stack,
            'auth' => 'oauth'
        ]);
    $response = $client->request('GET', 'products/'.$id); 
        echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
        

    }

}