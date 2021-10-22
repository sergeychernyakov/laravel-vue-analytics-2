<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\DomCrawler\Crawler;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;


class ContentCrawler extends Controller
{
    function getsvg(Request $request, $file, $id)
    {

        $client = new Client([
            'base_uri' => $contents = Storage::disk('s3')->url('svg20210628/' .$file .'.svg')
        ]);
    $response = $client->request('GET', '');
     $content = $response->getBody()->getContents();
    $crawler = new Crawler( $content );

    $data = $crawler->filter('#'.$id)->outerHtml();
    return $data;
    }

    function getsvgfull(Request $request, $file)
    {

        $client = new Client([
            'base_uri' => $contents = Storage::disk('s3')->url('svg20210628/' .$file .'.svg')
        ]);
    $response = $client->request('GET', '');
    echo $response->getBody()->getContents();
    }
}

