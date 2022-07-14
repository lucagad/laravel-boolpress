<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PageController extends Controller
{

    public function index(){
        // prendo l'elenco dei post
        $posts = Post::with('category','tags')->paginate(8);

        // restituisco il json
        return response()->json($posts);
    }
}
