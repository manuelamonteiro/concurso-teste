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
                <label for="id-voucher">Inscrição:</label>
                <input type="text" id="id-voucher" readonly value="" />

                <label for="name">Nome completo:</label>
                <input type="text" id="name-voucher" readonly value="" />

                <label for="address">Endereço:</label>
                <input type="text" id="address-voucher" readonly value="" />

                <label for="role">Cargo:</label>
                <input type="text" id="role-voucher" readonly value="" />
            </div>

            <div class="right-form">
                <div class="situation-date">
                    <label for="situation">Situação:</label>
                    <input type="text" id="situation-voucher" readonly value="" />

                    <label for="date">Data de Inscrição:</label>
                    <input type="text" id="date-voucher" readonly value="" />
                </div>

                <label for="CPF">CPF:</label>
                <input type="text" id="CPF-voucher" readonly value=""/>

                <div class="city-state-form">
                    <label for="state">Estado:</label>
                    <input type="text" id="state-voucher" readonly value="" />
                    </select>

                    <label for="city">Cidade:</label>
                    <input type="text" id="city-voucher" readonly value="" />
                    </select>
                </div>
            </div>
        </div>
        <div class="horizontal-line" />
    </form>

    <a href="http://127.0.0.1:8000/" onClick="returnToRegistration">Retornar para Inscrição</a>
</div>

@endsection