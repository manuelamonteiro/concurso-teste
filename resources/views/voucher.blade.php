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
                <input type="text" id="id" />

                <label for="name">Nome completo:</label>
                <input type="text" id="name" />

                <label for="address">Endereço:</label>
                <input type="text" id="address" />

                <label for="role">Cargo:</label>
                <input type="text" id="role" />
            </div>

            <div class="right-form">
                <div class="situation-date">
                    <label for="situation">Situação:</label>
                    <input type="text" id="situation" />

                    <label for="date">Data de Inscrição:</label>
                    <input type="text" id="date" />
                </div>

                <label for="CPF">CPF:</label>
                <input type="password" id="CPF" />

                <div class="city-state-form">
                    <label for="state">Estado:</label>
                    <select name="state" id="state">
                        <option value="">Selecionar</option>
                        <option value="rj">RJ</option>
                    </select>

                    <label for="city">Cidade:</label>
                    <select name="city" id="city">
                        <option value="">Selecionar</option>
                        <option value="rj">RJ</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="horizontal-line" />
    </form>

    <h3 class="return-page">Retornar para Inscrição</h3>
</div>

@endsection