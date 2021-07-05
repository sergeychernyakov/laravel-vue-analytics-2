<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;


class ContentCrawler extends Controller
{
    function getsvg(Request $request, $id)
    {

        $client = new Client([
            'base_uri' => 'https://cdn.shopify.com/'
        ]);
    $response = $client->request('GET', 's/files/1/0489/0168/5406/files/test.svg'); 
     $content = $response->getBody()->getContents();
    $crawler = new Crawler( $content );
    
    $data = $crawler->filter('#'.$id)->outerHtml();
    return $data;   
    }
}
