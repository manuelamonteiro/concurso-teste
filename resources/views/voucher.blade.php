@extends('layouts.main')
@section('title', 'Comprovante')
@section('content')

<h1>Concurso Público para Desenvolvedor de Software</h1>

<div class="voucher-page">
    <h2>Comprovante de Inscrição</h2>

    <form id="form">
        <div class="horizontal-line" />
        <div class="form-info">
            <div class="left-form">
                <label for="id">Inscrição:</label>
                <input type="text" id="id" readonly value="" />

                <label for="name">Nome completo:</label>
                <input type="text" id="name" readonly value="" />

                <label for="address">Endereço:</label>
                <input type="text" id="address" readonly value="" />

                <label for="role">Cargo:</label>
                <input type="text" id="role" readonly value="" />
            </div>

            <div class="right-form">
                <div class="situation-date">
                    <label for="situation">Situação:</label>
                    <input type="text" id="situation" readonly value="" />

                    <label for="date">Data de Inscrição:</label>
                    <input type="text" id="date" readonly value="" />
                </div>

                <label for="CPF">CPF:</label>
                <input type="password" id="CPF" />

                <div class="city-state-form">
                    <label for="state">Estado:</label>
                    <input type="text" id="state" readonly value="" />
                    </select>

                    <label for="city">Cidade:</label>
                    <input type="text" id="city" readonly value="" />
                    </select>
                </div>
            </div>
        </div>
        <div class="horizontal-line" />
    </form>

    <h3 class="return-page">Retornar para Inscrição</h3>
</div>

@endsection