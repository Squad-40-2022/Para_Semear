import React from 'react'
import pdf from '../IMG/imagens.colaboradores/pdf-download-2617 (1).png';
import Header from '../components/estrutura/header';
import Footer from '../components/estrutura/footer';
import '../CSS/style-log_inst.css'
import '../CSS/style-log_colab.css'


export default function Projetos() {
    return (
        <>
            <Header />
            <aside class="col-1 d-flex align-items-end pb-2">
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling"><img src="../IMG/Icon-login.png" alt="" /></button>

                <div class="offcanvas offcanvas-end canva overflow-auto" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"
                    aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel"><img src="../IMG/user.png" alt="" />
                            Verde oliva</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="row p-5">
                        <button class="btn bt-log" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop001">Dados</button>
                        <button class="btn bt-log" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop002">Projetos </button>
                        <button class="btn bt-log" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop003">Doação</button>
                        <button class="btn bt-log" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop004">Voluntarios</button>
                        <button class="btn bt-log" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop005">Relatórios</button>
                        <button class="btn bt-log"><a href="./" class="tx">Sair</a></button>
                    </div>
                </div>
            </aside>
            {/*menu lateral*/}



            {/*conteúdo menu lateral*/}
            {/*Modal 001 sua conta*/}
            <div class="modal modal-dialog-scrollable" id="staticBackdrop001" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel001" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel001">Verde Oliva</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table>
                                <tr>
                                    <td> Razão Social:</td>
                                    <td> Verde Oliva ME</td>
                                </tr>
                                <tr>
                                    <td> Nome Fantasia:</td>
                                    <td> Verde Oliva </td>
                                </tr>
                                <tr>
                                    <td> CNPJ:</td>
                                    <td> 000258021/0001</td>
                                </tr>
                                <tr>
                                    <td> Endereço:</td>
                                    <td> Coronel de matos, 507 </td>
                                    <td>Bairro:</td>
                                    <td>Flores do nascer</td>
                                </tr>
                                <tr>
                                    <td> Cep:</td>
                                    <td> 06915-169</td>
                                    <td> Cidade:</td>
                                    <td> Rio de Janeiro</td>
                                    <td>UF:</td>
                                    <td>RJ</td>
                                </tr>
                                <tr>
                                    <td>email:</td>
                                    <td colspan="2">faleconosco@verdeoliva.com.br</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">Telefones:</td>
                                    <td> (21) 2648-7898</td>
                                </tr>
                                <tr>
                                    <td> (21) 96587-3636</td>
                                </tr>
                                <tr>

                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer">

                            <a href="./dados.html"><button type="submit" class="btn bt-inst tx">Alterar</button></a>
                            <button type="button" class="btn bt-inst tx" data-bs-dismiss="modal">Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*modal 002 projetos */}
            <div class="modal modal-dialog-scrollable" id="staticBackdrop002" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel002" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel002">Projetos cadastrados</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5> Manhas de Sexta</h5>
                            <p> todas as sexta os contemplados pela ong apresentão suas poesias e versos em um saral
                                matinal,
                                esse precisa de materiais de audio e iluminação, alem de um voluntario com habilidades para
                                organização de eventos e sarais</p>
                            <br />
                            <hr />
                            <br />
                            <h5> Contando um Conto</h5>
                            <p> As quartas um livro da biblioteca é lido por um voluntario, e a historia serve de base para
                                que
                                as crianças e adolescentes criem sua propria versão que são apresentadas nas terças da
                                semana
                                seguinte</p>
                        </div>
                        <div class="modal-footer">

                            <a href="./projetos.html">
                                <button type="submit" class="btn bt-inst tx">Novo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/*modal 003 Doações */}
            < div class="modal modal-dialog-scrollable" id="staticBackdrop003" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel003" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel003">Doações Recebidas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table>
                                <tr>
                                    <th> Data</th>
                                    <th> Tipo</th>
                                    <th> Qde.</th>
                                    <th> Origem</th>

                                </tr>
                                <tr>
                                    <td> 18/03/2022</td>
                                    <td> Monetario </td>
                                    <td> R$ 50,00 </td>
                                    <td> Anônino </td>
                                </tr>
                                <tr>
                                    <td> 07/05/2022</td>
                                    <td> Monetario </td>
                                    <td> R$ 30,00</td>
                                    <td> CaCho e Liso Ltda.</td>
                                </tr>
                                <tr>
                                    <td> 26/05/2022</td>
                                    <td> Monetario </td>
                                    <td> R$ 50,00</td>
                                    <td> Antonio Carlos</td>
                                </tr>
                                <tr>
                                    <td> 26/05/2022</td>
                                    <td> Livro</td>
                                    <td> 60 un</td>
                                    <td> Antonio Carlos</td>
                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer">

                            <button type="submit" class="btn bt-inst tx">Atualizar</button>
                            <button type="button" class="btn bt-inst tx" data-bs-dismiss="modal">Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/**<!--modal 004 Voluntarios--> */}
            < div class="modal modal-dialog-scrollable" id="staticBackdrop004" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel004" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel004">Verde Oliva</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table>
                                <tr>
                                    <th> Nome:</th>
                                    <td> André Marques</td>
                                    <td> - </td>
                                    <td>
                                        <div class="pop">
                                            <a tabindex="0" class="btnn btn-lg tx" role="button"
                                                data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                data-bs-content="Numero: (00) 00000-0000 
                                            Estado:------ Cidade:-------">
                                                Contato
                                            </a>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <th> Nome:</th>
                                    <td> Angela Campos</td>
                                    <td> - </td>
                                    <td>
                                        <div class="pop">
                                            <a tabindex="0" class="btnn btn-lg tx" role="button"
                                                data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                Contato
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th> Nome:</th>
                                    <td> João Henrique</td>
                                    <td> - </td>
                                    <td>
                                        <div class="pop">
                                            <a tabindex="0" class="btnn btn-lg tx " role="button"
                                                data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                Contato
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th> Nome:</th>
                                    <td> Priscila Campos</td>
                                    <td> - </td>
                                    <td>
                                        <div class="pop">
                                            <a tabindex="0" class="btnn btn-lg tx tx" role="button"
                                                data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                Contato
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th> Nome:</th>
                                    <td> Leandro Santos</td>
                                    <td> - </td>
                                    <td>
                                        <div class="pop">
                                            <a tabindex="0" class="btnn btn-lg tx" role="button"
                                                data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                Contato
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer">

                            <button type="submit" class="btn bt-inst tx">Atualizar</button>
                            <button type="button" class="btn bt-inst tx" data-bs-dismiss="modal">Finalizar</button>
                        </div>
                    </div>
                </div >
            </div >




            {/*< !--modal 005 Prestação de contas-- > */}
            <div class="modal modal-dialog-scrollable" id="staticBackdrop005" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel005" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel005">Relatorio de gastos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h6>Olá!</h6>
                            <p> Este é o local onde você deve detalhar as informações das entradas e gastos da instituição,
                                para que possamos
                                prosseguir com transparência devida junto aos colaboradores.Insira a seguir os dados
                                pedidos:
                            </p>
                            <table>
                                <tr>
                                    <label for="text" class="form-label">Novos voluntarios:</label>
                                    <input type="text" class="form-control" id="text" />
                                </tr>
                                <tr>
                                    <label for="text" class="form-label">Total de gasto mensal:</label>
                                    <input type="text" class="form-control" id="text" />
                                </tr>
                                <tr>
                                    <label for="text" class="form-label">Doação -especifique-:</label>
                                    <input type="text" class="form-control" id="text" />
                                </tr>

                                <tr>
                                    <label for="text" class="form-label">Pessoas contempladas:</label>
                                    <input type="text" class="form-control" id="text" />
                                </tr>
                                <tr>
                                    <label for="text" class="form-label">Projetos novos:</label>
                                    <input type="text" class="form-control" id="text" />
                                </tr>
                                <tr>
                                    <label for="text" class="form-label">Materiais usados:</label>
                                    <input type="text" class="form-control" id="text" />
                                </tr>
                                <tr>
                                    <label for="date" class="form-label">Data :</label>
                                    <input type="date" class="form-control" id="date" />
                                </tr>
                            </table>

                        </div>
                        <div class="modal-footer">

                            <button type="submit" class="btn bt-inst tx">enviar</button>
                            <button type="button" class="btn bt-inst tx" data-bs-dismiss="modal">Finalizar</button>
                        </div>

                        <div>
                            <p class="fs- color lin">
                                Relatório anterior:
                            </p>
                            <img src="../IMG/imagens.colaboradores/pdf-download-2617 (1).png " alt="" />
                            <a href="https://drive.google.com/file/d/1QlCTOSrBiZFHb7cPNabd5DfkbTAc9Kvl/view?usp=sharing"
                                target="_blank">Relatório anual 2021 </a>
                        </div>
                    </div>
                </div>
            </div>
            {/** <!--modal 005 Prestação de contas-->
        <!--BARRA DE NAVEGAÇÃO--> */}

            {/**<!--CONTEUDO--> */}
            <div>
                <main class="container conteudo my-4 p-4">
                    <div class="border-bottom">
                        <img src="../IMG/user.png" alt="" />
                        <h2>Verde Oliva</h2>
                    </div>

                </main>
                <div class="container">
                    <div class="mb-4 row justify-content-between">
                        <aside class="col-3 conteudo">
                            <div class="row p-5">
                                <h5> Visualizações</h5>
                                <p> 9 visitas na ultima semana</p>
                                <p class="sub"> Grafico de visitas aqui</p>
                            </div>
                        </aside>
                        <section class="col-xl-8 col-12 conteudo cont-fixed p-5">
                            <h3> Doaçoes no ultimo mês</h3>
                            <p>Gráfico de doações aqui</p>                            <br />
                            <h3> Voluntarios no ultimo mês</h3>
                            <p>Gráfico de novos voluntarios aqui</p>                                <br />
                            <h3> Acolhidos no ultimo mês</h3>
                            <p>Gráfico de crescimento de contemplados aqui</p>                                    <br />
                            <h3> Veja as Instituições que mais fizeram eventos esse mês</h3>
                            <p>Lista das instituições aqui</p>                                        <br />
                            <h3> Projetos Que tiveram ótimo desempenho</h3>
                            <p>dados dos projetos</p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}