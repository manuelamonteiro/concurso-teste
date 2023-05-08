<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estado;

class EstadoController extends Controller
{
    public function show(Request $request)
    {
        if (null != $request->estado_id) {
            $result = Estado::where('estado_id', $request->estado_id)->orderBy('estado_id')->get();
            return json_encode($result);
        }
        return json_encode(Estado::orderBy('estado_id')->get());
    }

    public static function showById($id)
    {
        return json_encode(Estado::loadEstadoById($id));
    }
}
