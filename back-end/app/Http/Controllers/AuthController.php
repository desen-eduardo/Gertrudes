<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function unauthorized() 
    {
        return response()->json([
            'error'=>'Não autorizado'
        ],401);
    }

    public function register(Request $request)
    {
        $array = ['error'=>''];

        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'phone'=>'required',
            'password'=>'required|min:6',
            'address_complement'=>'required'
        ]);

        if ($validator->fails()) {
            $array['error'] = $validator->errors()->first();
            return $array;
        }

        $name = $request->input('name');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $password = $request->input('password');
        $addressComplement = $request->input('address_complement');
        
        $hashPassword = password_hash($password,PASSWORD_BCRYPT);

        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->phone = $phone;
        $user->password = $hashPassword;
        $user->address_complement = $addressComplement;
        $user->save();

        $token = Auth::attempt(['email' => $email, 'password' => $password]);

        if (!$token) {
            $array['error'] = 'Ocorreu um erro';
            return $array;
        }

        $array['token'] = $token;
        $array['user'] = auth::user();

        return $array;
    }

    public function login(Request $request)
    {
        $array = ['error'=>''];

        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if ($validator->fails()) {
            $array['error'] = $validator->errors()->first();
            return $array;
        }

        $email = $request->input('email');
        $password = $request->input('password');
        
        $token = Auth::attempt(['email' => $email, 'password' => $password]);

        if (!$token) {
            $array['error'] = 'E-mail ou/e senha invalido';
            return $array;
        }

        $array['token'] = $token;
        $array['user'] = auth::user();

        return $array;
    }
}
