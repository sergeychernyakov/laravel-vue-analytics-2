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
           'consumer_key'    => 'hm9raxwmme2dez08nj7a7d5tnuq6i4lm',
           'consumer_secret' => 'qpx18gs0jrlw14nazamw6kp2cwracv4q',
           'token'           => '3bhmx1oaupfhkr3rd2z4d4k58m9ln2wr',
           'token_secret'    => 'suc4uwkwwum725uvhn48me9fpnkz9cwy'
       ]);
       
        $stack->push($middleware);
       
        $client = new Client([
            'base_uri' => 'https://omnidemo.commerce.omniautomotive.uk/index.php/rest/default/V1/',
            'handler' => $stack,
            'auth' => 'oauth'
        ]);
    $response = $client->request('GET', 'products?Page]=1&searchCriteria[sortOrders][[0][direction]=DESC'); 
        echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
        

    }

function omni(Request $request)
    {
        $stack = HandlerStack::create();

        $middleware = new Oauth1([
           'consumer_key'    => 'hm9raxwmme2dez08nj7a7d5tnuq6i4lm',
           'consumer_secret' => 'qpx18gs0jrlw14nazamw6kp2cwracv4q',
           'token'           => '3bhmx1oaupfhkr3rd2z4d4k58m9ln2wr',
           'token_secret'    => 'suc4uwkwwum725uvhn48me9fpnkz9cwy'
       ]);
       
        $stack->push($middleware);
       
        $client = new Client([
            'base_uri' => 'https://omnidemo.commerce.omniautomotive.uk/index.php/rest/default/V1/',
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
           'consumer_key'    => 'hm9raxwmme2dez08nj7a7d5tnuq6i4lm',
           'consumer_secret' => 'qpx18gs0jrlw14nazamw6kp2cwracv4q',
           'token'           => '3bhmx1oaupfhkr3rd2z4d4k58m9ln2wr',
           'token_secret'    => 'suc4uwkwwum725uvhn48me9fpnkz9cwy'
       ]);
       
        $stack->push($middleware);
       
        $client = new Client([
            'base_uri' => 'https://omnidemo.commerce.omniautomotive.uk/index.php/rest/default/V1/',
            'handler' => $stack,
            'auth' => 'oauth'
        ]);
    $response = $client->request('GET', 'orders/'.$id); 
        echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
        

    }

}