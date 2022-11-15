import React from 'react'
import Header from '../components/estrutura/header';
import dinheiro from '../IMG/imagens.colaboradores/dinheiro.png';
import celular from '../IMG/imagens.colaboradores/celular.png.png'
import livros from '../IMG/imagens.colaboradores/livros.png';

export default function Col() {
    return (
<>
<Header/>
        <div class="container">
            <form className="Colab">
                <div class="fw-bold">
                    <h1 className="h1"> Boa semente, só pode dar bom fruto! </h1>
                    <h3 className="h1"> Convidamos você para semear. </h3>
                    <p className="h2">Para nós, sua ajuda é como uma semente, que bem cuidada vai florescer. </p>
                    <p className="h2">Cada mão estendida será de bom grado recebida e as Ongs esperam anciosas por isso.</p>
                    <p className="h2"> Comprometidas e persistentes elas são
                        totalmente desvinculadas de qualquer ganho governamental e <strong>PRECISAM</strong> do apoio de
                        todos! </p>
                    <p className="h2 destaque">
                        <strong><big> A sua ajuda está fazendo falta.</big></strong>
                    </p>
                    <p className="h2">
                        A alfabetização é direito de todos mas nem todos tem acesso a ela. Junte-se a nós e apoie uma
                        Ong.
                        Onde você não pode ir , suas ações irão.
                    </p>
                </div>
                <section>
                    <h1 class="h1">
                        Você pode escolher !
                    </h1>
                    <div class="row justify-content-around">
                        <div class="col-xl col-12 d-flex justify-content-center m-4">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front">
                                        <img src={dinheiro} className="Ong-logo" alt="ong" />
                                    </div>
                                    <div class="back overflow-auto p-4">
                                        <p>Apoie uma Ong financeiramente, à sua maneira. Não se preocupe, as Ongs farão
                                            prestações
                                            de
                                            contas e você terá transparência em todo o tempo. A verdade é que nem todo mundo
                                            quer
                                            ajudar
                                            uma Ong mas
                                            provavelmente alguém ja te disse que, você não é todo mundo!Faça algo bom.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl col-12 d-flex justify-content-center my-4">
                            <div class="flip-container">
                                <div class="flipper text-center">
                                    <div class="front">
                                        <img src={celular} className="Ong-logo" alt="ong" />
                                    </div>
                                    <div class="back overflow-auto p-4">
                                        <p>A tecnologia chegou para muitos mas ainda não para todos! Nas áreas rurais não é tão
                                            fácil
                                            conseguir uma aparelho, ainda que para estudar ou pesquisar suas dúvidas. Você pode
                                            doar
                                            equipamentos para serem utilizados como instrumentos de ensino e certamente trará um
                                            mundo
                                            novo para alguém!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl col-12 d-flex justify-content-center m-4">
                            <div class="flip-container">
                                <div class="flipper ">
                                    <div class="front">
                                        <img src={livros} className="Ong-logo" alt="ong" />
                                    </div>
                                    <div class="back overflow-auto p-4">
                                        <p>A leitura é um dividor de águas em nossas vidas, será assim tudo oque você
                                            disponibilizar
                                            para
                                            essas Ongs. Você pode doar seus livros, uma nova coleção, cadernos, pincéies...Use a
                                            criatividade!
                                            Tudo é bem vindo.Visite as páginas das Ongs,saiba doque precisam e junte a
                                            nescessidade
                                            delas
                                            com a
                                            sua generosidade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="fw-bold">
                    <h2>ESTIMATIVA EVOLUTIVA DO ÚLTIMO ANO:</h2>
                    <div class="flourish-embed flourish-chart" data-src="visualisation/10647759">
                        <script src="https://public.flourish.studio/resources/embed.js"></script>
                    </div>
                </section>
            </form>

        </div>
</>
    )

}