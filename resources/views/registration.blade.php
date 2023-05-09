@extends('layouts.main')
@section('title', 'Inscrição')
@section('content')

<h1>Concurso Público para Desenvolvedor de Software</h1>

<div class="registration-page">
    <h2>Inscrição do Candidato</h2>

    <form id="form">
        <div class="horizontal-line" />
        <div class="form-info">
            <div class="left-form">
                <label for="name">Nome completo:</label>
                <input type="text" id="name" />

                <label for="address">Endereço:</label>
                <input type="text" id="address" />

                <label for="role">Cargo:</label>
                <input type="text" id="role" />
            </div>

            <div class="right-form">
                <label for="CPF">CPF:</label>
                <input type="text" id="CPF" maxlength="14"/>

                <div class="city-state-form">
                    <label for="state">Estado:</label>
                    <select name="state" id="state">
                        <option value="">Selecionar</option>
                        @foreach($state as $state)
                        <option value={{$state -> estado_id}}>{{$state -> sigla}}</option>
                        @endforeach
                    </select>

                    <label for="city">Cidade:</label>
                    <select name="city" id="city">
                        <option value="">Selecionar</option>
                        @foreach($city as $city)
                        <option value={{$city -> cidade_id}}>{{$city -> nome}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>

        <div class="horizontal-line" />

        <button type="submit" onClick="saveRegistration" class="registration-button">Salvar Inscrição</button>
    </form>
</div>

@endsection
