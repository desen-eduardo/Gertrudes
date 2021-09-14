<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Sale;
use App\Models\Item;

class SaleController extends Controller
{
    public function sales(Request $request)
    {
        $array = ['error'=>''];

        
        return $request;
    }

    private function calculer(Request $request)
    {

    } 

    public function lastSale()
    {
        $array = ['error'=>''];
        $user = Auth::user();
        $sale = Sale::where('user_id',$user->id)->get()->last();
        $array['pay'] = $sale->pay;
        $array['sales'] = $sale->items()->where('sale_id',$sale->id)->get();
        return $array;
    }
}
