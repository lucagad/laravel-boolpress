<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PageController extends Controller
{

    public function index(){

        $posts = Post::with('category','tags')->paginate(8);

        return response()->json($posts);
    }


    public function show($slug){

        $post = Post::where('slug',$slug)->with(['category','tags'])->first();

        return response()->json($post);
    
    }

}
