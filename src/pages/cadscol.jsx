import React from 'react'

import Header from '../components/estrutura/header'

export default function cadscol() {
    return (
<>
<Header/>
        <div class="container">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          
            </button>
            <form className="CadCol">
                <h2>Cadastro do Colaborador </h2>
                <div className="dados mb-3">
                    <label for="name">Nome Completo</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Nascimento</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Cpf/Rg</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="gen-p">
                    <input type="radio" id="none" name="gener"></input>
                    <label for="radio">Feminino</label>
                    <input type="radio" id="none" name="gener"></input>
                    <label for="radio">Masculino</label>
                    <input type="radio" id="none" name="gener"></input>
                    <label for="radio">Outro</label>
                </div>
                <div className="dados mb-3">
                    <label for="name">Email</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Escolha a senha</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Celular com DDD</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <h5>Preencha abaixo com o seu endereço</h5>
                <div className="dados mb-3">
                    <label for="name">Cep</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Estado</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Cidade</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Bairro</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <div className="dados mb-3">
                    <label for="name">Rua e N°</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
                <h5>Anexe sua Documentaçao para revisao:</h5>
                <div id="final">
                    <div class="input-group mb-3 container">
                        <input type="file" class="form-control" id="inputGroupFile02"></input>
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <a class="btnn btn-primary" href="login_i.html" role="button">Cadastrar</a>
                </div>
            </form>
        </div>
</>
    )

}