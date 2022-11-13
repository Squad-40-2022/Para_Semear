import React from 'react'

export default function cadsinst() {
    return (

        <div class="col-1 d-flex align-items-end pb-2">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="../IMG/Icon-login.png" alt="" />
            </button>
            <form className="Cadastro" action="./inst-save">
                <h2>Cadastro da Instituição </h2>
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
                    <label for="radio">Ong Fisica</label>
                    <input type="radio" id="none" name="gener"></input>
                    <label for="radio">Ong Online</label>
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
                <h5>Preencha abaixo com o endereço da Instituição</h5>
                <div className="dados mb-3">
                    <label for="name">Nome da Instituiçao</label>
                    <input id="doc" type="text" name="nome" placeholder="Digite o Nome" required ></input>
                </div>
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
                <h5>Anexe toda Documentaçao da Instituição e do Responsavel abaixo.</h5>
                <div id="final">
                    <div class="input-group mb-3 container">
                        <input type="file" class="form-control" id="inputGroupFile02"></input>
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <a class="btnn btn-primary" href="login_i.html" role="button">Cadastrar</a>
                </div>
            </form>
        </div>

    )

}