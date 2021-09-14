<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function allProducts()
    {
        $array = ['error'=>''];
        $array['products'] = Product::all();
        return $array;
    }
}
