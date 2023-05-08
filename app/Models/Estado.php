<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $table = 'estado';
    protected $fillable = ['nome', 'sigla'];

    public static function loadEstadoById($id)
    {
        return Estado::where('estado_id', $id)->get()->first();
    }
}
