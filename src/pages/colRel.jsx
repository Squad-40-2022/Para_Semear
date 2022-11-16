import React from 'react'
import Header from '../components/estrutura/header';
import user from '../IMG/user.png';
import dow from '../IMG/imagens.colaboradores/pdf-download-2617 (1).png';
import Footer from '../components/estrutura/footer';

export default function ColRel() {
    return (
<>
<Header/>
        <div className='relat'>
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
                            <button class="btn bt-menu mt-5"><a href="../colab_acom.html" class="tx">Relatorio</a></button>
                            <button class="btn bt-menu"><a href="./doacao" class="tx">Nova
                                doação</a></button>
                            <button class="btn bt-menu"><a href="./colinst" class="tx">Minhas
                                instituições</a></button>
                            <button class="btn bt-menu"><a href="colab_conf.html" class="tx">Configurações
                                e privacidade</a></button>
                        </div>
                    </aside>

                    <section class="col-xl-8 col-12 conteudo cont-fixed p-5 ">
                        <table class="table">
                            <h1>Olá, Maria!</h1>
                            <h5 text primary>Aqui estão os detalhamentos de suas doações :</h5>
                            <thead>
                                <tr>
                                    <th scope="col">TIPO</th>
                                    <th scope="col">QUANTIDADE</th>
                                    <th scope="col">INSTITUIÇÃO</th>
                                    <th scope="col">DATA</th>
                                    <th scope="col">DESCRIÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">LIVRO</th>
                                    <td>1</td>
                                    <td>VERDE OLIVA</td>
                                    <td>15/03</td>
                                    <td>COLEÇÃO MONTEIRO LOBATO</td>
                                </tr>
                                <tr>
                                    <th scope="row">MONETÁRIO</th>
                                    <td>R$500</td>
                                    <td>VERDE OLIVA</td>
                                    <td>14/06</td>
                                    <td>APOIO PROJETOS</td>
                                </tr>
                                <tr>
                                    <th scope="row">ARTE </th>
                                    <td>1</td>
                                    <td>VERDE OLIVA</td>
                                    <td>09/10</td>
                                    <td>ARTES VISUAIS</td>
                                </tr>
                                <tr>
                                    <th scope="row">MONETÁRIO</th>
                                    <td>R$200</td>
                                    <td>VERDE OLIVA</td>
                                    <td>09/10</td>
                                    <td>APOIO PROJETOS</td>
                                </tr>
                                <tr>
                                    <th scope="row">LIVRO</th>
                                    <td>2</td>
                                    <td>VERDE OLIVA</td>
                                    <td>11/11</td>
                                    <td>COLEÇÃO MACHADO DE ASSIS</td>
                                </tr>
                                <tr>
                                    <th scope="row">LIVRO</th>
                                    <td>1</td>
                                    <td>VERDE OLIVA</td>
                                    <td>24/12</td>
                                    <td>COLEÇÃO JOAQUI M. MACEDO</td>
                                </tr>
                                <tr>
                                    <th scope="row">VERBA</th>
                                    <td>R$250</td>
                                    <td>VERDE OLIVA</td>
                                    <td>29/12</td>
                                    <td>1 LOTE CAMISA UNIFORME</td>
                                </tr>
                            </tbody>
                        </table>

                        <div classe="container">
                            <button onclick="window.print()"
                                class="btn bt-ins">Imprima</button>

                        </div>


                        <div>
                            <p class="fs- color lin">

                            </p>
                            <div class="front">
                                <img src={dow} className="Ong-logo" alt="ong" />
                            </div>

                            <div href="https://drive.google.com/file/d/1K9qXaFN71b4UuFJFZi3eAulVWX4r5huA/view?usp=sharing"
                                target="_blank">RELATÓRIO </div>
                        </div>



                    </section>
                </div>


            </div>

        </div>
        <Footer/>
</>
    )

}