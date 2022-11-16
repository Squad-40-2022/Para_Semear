import React from 'react';
import Header from '../components/estrutura/header';
import LogoP from '../IMG/logo/logo-preto.png'
import '../CSS/style-login.css'

export default function Logcol() {
    return (
<>
<Header/>
<main class="container conteudo my-4 px-4">
            <div class="login row justify-content-around py-5">
                <div class="col-xl-7 col-lg-6">
                    <h1 class="text-center mt-5" id="texto-login">Ficamos felizes em ter você aqui, vamos realizar sonhos juntos.</h1>
                    <img src={LogoP} alt="semear" class="m-4 img-fluid" id="img-logo2"/>
                </div>

                <div class="col-xl-4 col-lg-5 col-md-7 col-sm-9">
                    <div class="card-login pt-5 px-2">
                        <div class="col-4" id="img-logo">
                            <img src={LogoP} alt="semear" class="my-3 img-fluid"/>
                        </div>
                        <h3>Login</h3>
                        <h5 class="mb-4">Colaborador</h5>
                        <form class="w-75">
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
                            <a href="./ajuda" class="tx btn">Esqueci minha senha</a>
                           <div class="my-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1" >Manter conectado</label>
                            </div>
                            <div class="text-center mb-5">
                                <a href="./colacomp" type="submit" class="tx btn btn-entrar">Conectar</a>
                            </div>
                            <div class="text-center">
                                <h3 class="mb-2">Se Cadastrar</h3>
                                <a href="./cadscol" class="tx btn">Como Colaborador </a>
                                <a href="./cadsinst" class="tx btn">Como Instituição </a>
                            </div>
                        </form>
                        <small class="mt-4 mb-3"><a href="./loginsinst" class="tx">Sou uma instituição</a></small>
                    </div>
                </div>
            </div>
        </main>
</>
    )

}