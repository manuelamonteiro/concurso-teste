<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cidade;
use App\Models\Estado;

class PaginaDeInscricaoController extends Controller
{
    public function show(){
        $city = Cidade::all();
        $state = Estado::all();
        return view('registration', ['city' => $city, 'state' => $state]);
    }
}
