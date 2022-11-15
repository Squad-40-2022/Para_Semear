import React from 'react'

export default function Logininst() {
    return (

        <div class="col-1 d-flex align-items-end pb-2">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="../IMG/Icon-login.png" alt="" />
            </button>
            <div className="LoginCol">
                <form className="loginC">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="digite seu email ..." required></input>
                    </div>
                    <div class="mb-1">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                            placeholder="digite sua senha ..." required></input>
                    </div>
                    <a href="ajuda.html" class="tx btn">Esqueci minha senha</a>
                    <div class="my-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Manter conectado</label>
                    </div>
                    <div class="text-center mb-5">
                        <a href="colab_acom.html" type="submit" class="tx btn btn-entrar">Conectar</a>
                    </div>
                    <div class="text-center">
                        <h4 class="mb-2">Se Cadastrar</h4>
                        <a href="DoadoresCadastro.html" class="tx btn">Como Colaborador </a>
                        <a href="InstituiCadastro.html" class="tx btn">Como Instituição </a>
                    </div>
                    <small class="mt-4 mb-3"><a href="login_c.html" class="tx">Sou um Colaborador</a></small>
                </form>
            </div>
        </div>

    )

}