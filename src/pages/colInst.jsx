import React from 'react'
import Header from '../components/estrutura/header';
import user from "../IMG/user.png";
import social from '../IMG/imagens/social.png';
import webp from '../IMG/imagens/transformar.webp';
import sem from '../IMG/imagens/semente de esperança.jpg';
import Footer from '../components/estrutura/footer';

export default function ColInst() {
    return (
        <>
<Header/>
        <div class="container">
            <div className='instCol'>
                <main class="container conteudo my-5 p-5">
                    <div class="border-bottom">
                        <h2>Maria Silva</h2>
                        <div class="front">
                            <img src={user} className="Ong-logo" alt="ong" />
                        </div>
                        
                    </div>

                </main>
                <div class="container">
                    <div class="mb-4 row justify-content-between">
                        <aside class="col-3 conteudo">
                            <div class="row px-5">
                                <button class="btn bt-menu mt-5"><a href="../colab_acom.html"
                                    class="tx">Suas Instituiçoes</a></button>
                                <button class="btn bt-menu"><a href="./doacao" class="tx">Nova
                                    doação</a></button>
                                <button class="btn bt-menu"><a href="./colinst" class="tx">Minhas
                                    instituições</a></button>
                                <button class="btn bt-menu"><a href="./colRel" class="tx">Relatório 2021
                                    disponível</a></button>
                                <button class="btn bt-menu"><a href="./ajuda" class="tx">Configurações
                                    e privacidade</a></button>
                            </div>
                        </aside>
                        <section class="col-xl-8 col-12 conteudo cont-fixed p-5 ">
                            <h2> Minhas Instituições </h2>
                            <div class=" container overflow-scroll">
                                <div>
                                    <div>
                                        <div>
                                            <p class="destaque"> Veja as as instituições que transforma vidas através da sua
                                                contribuição
                                            </p>
                                            <div class="card mb-3">
                                                <div class="front">
                                                    <img src={social} className="Ong-logo" alt="ong" />
                                                </div>
                                                <div class="card-body">
                                                    <h5 class="card-title"> Instituto Ler a Esperamça</h5>
                                                    <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                                                    <p class="card-text">o instituto ler a esperança apoia escolas em zonas
                                                        rurais
                                                        no
                                                        estadao Maranhao, sao atendidos em torno de 1200 pessoas a missao
                                                        This
                                                        is a
                                                        wider card with supporting text below as a natural lead-in to
                                                        additional
                                                        content. This content is a little bit longer.
                                                    </p>
                                                    <p class="card-text">
                                                        <small class="text-muted">Contato: (51)
                                                            00000-0000
                                                        </small>
                                                    </p>
                                                    <button class="btn bt-ins">Contribuir agora </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="front">
                                                <img src={social} className="Ong-logo" alt="ong" />
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title"> Fundação Transformar</h5>
                                                <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                                                <p class="card-text"><h2> fundaçao Transforma </h2> apoia escolas em zonas
                                                    rurais
                                                    no
                                                    estadao Maranhao, sao atendidos em torno de 1200 pessoas a missao This
                                                    is a
                                                    wider
                                                    card with supporting text below as a natural lead-in to additional
                                                    content.
                                                    This
                                                    content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">Contato: (51)
                                                    00000-0000</small>
                                                </p>
                                                <button class="btn bt-ins"> Contribuir agora </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card mb-3">
                                        <div class="front">
                                            <img src={webp} className="Ong-logo" alt="ong" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title"> Instituto Transformar</h5>
                                            <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                                            <p class="card-text">o instituto ler a esperança apoia escolas em zonas rurais
                                                no
                                                estadao
                                                Maranhao, sao atendidos em torno de 1200 pessoas a missao This is a wider
                                                card
                                                with
                                                supporting text below as a natural lead-in to additional content. This
                                                content
                                                is a
                                                little
                                                bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Contato: (51) 00000-0000</small>
                                            </p>
                                            <button class="btn bt-ins"> Contribuir agora </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-3">
                                    <div class="front">
                                        <img src={sem} className="Ong-logo" alt="ong" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title"> Associção Educadores do Amanhã</h5>
                                        <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                                        <p class="card-text">o instituto ler a esperança apoia escolas em zonas rurais no
                                            estadao
                                            Maranhao,
                                            sao atendidos em torno de 1200 pessoas a missao This is a wider card with
                                            supporting
                                            text
                                            below
                                            as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text"><small class="text-muted">Contato: (51) 00000-0000</small></p>
                                        <button class="btn bt-ins"> Contribuir agora </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

            </div>
        </div>
        <Footer/>
</>
    )

}