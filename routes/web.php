<?php

use App\Http\Controllers\InscricaoController;
use App\Http\Controllers\PaginaDeComprovanteController;
use App\Http\Controllers\PaginaDeInscricaoController;
use App\Models\Cidade;
use App\Models\Estado;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PaginaDeInscricaoController::class, 'show']);

Route::get('/voucher', [PaginaDeComprovanteController::class, 'show']);
