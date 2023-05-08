<?php

use App\Http\Controllers\InscricaoController;
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

Route::get('/', function () {
    $city = Cidade::all();
    $state = Estado::all();
    return view('registration', ['city' => $city, 'state' => $state]);
});

Route::get('/voucher', function () {
    return view('voucher');
});
