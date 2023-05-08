<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cidade;

class CidadeController extends Controller
{
    public function show(Request $request)
    {
        if (null != $request->cidade_id) {
            $result = Cidade::where('cidade_id', $request->cidade_id)->orderBy('cidade_id')->get();
            return json_encode($result);
        }
        return json_encode(Cidade::orderBy('cidade_id')->get());
    }

    public static function showById($id)
    {
        return json_encode(Cidade::loadCidadeById($id));
    }
}
