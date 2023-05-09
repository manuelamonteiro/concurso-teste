<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inscricao;
use App\Models\PessoaFisica;

class PaginaDeComprovanteController extends Controller
{
    public function show(){
        // $register = json_encode(Inscricao::loadInscricaoById($id));
        // $person = json_encode(PessoaFisica::loadPessoaFisicaById($id));
        // return view('voucher', ['register' => $register, 'person' => $person]);
        return view('voucher');
    }
}
