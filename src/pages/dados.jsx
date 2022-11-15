import React from 'react'
import Header from '../components/estrutura/header'

export default function Dados() {
    return (
        <>
<Header/>
        <div class="container">
            <form className="Dados">
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
                                <h5> Contando um Conto</h5>
                                <p> As quartas um livro da biblioteca é lido por um voluntario, e a historia serve de base para
                                    que
                                    as crianças e adolescentes criem sua propria versão que são apresentadas nas terças da
                                    semana
                                    seguinte</p>
                            </div>
                            <div class="modal-footer">

                                <a href="./projetos.html"><button type="submit" class="btn bt-inst tx">Novo</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal modal-dialog-scrollable" id="staticBackdrop003" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel003" aria-hidden="true">
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

                <div class="modal modal-dialog-scrollable" id="staticBackdrop004" data-bs-backdrop="static" data-bs-keyboard="false"
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
                                                <div tabindex="0" className="btnn btn-lg tx" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
                                                    title="Dados do Colaborador" data-bs-content="Numero: (00) 00000-0000  Estado:------ Cidade:-------">
                                                    Contato
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Nome:</th>
                                        <td> Angela Campos</td>
                                        <td> - </td>
                                        <td>
                                            <div class="pop">
                                                <div tabindex="0" class="btnn btn-lg tx" role="button"
                                                    data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                    data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                    Contato
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Nome:</th>
                                        <td> João Henrique</td>
                                        <td> - </td>
                                        <td>
                                            <div class="pop">
                                                <div tabindex="0" class="btnn btn-lg tx " role="button"
                                                    data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                    data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                    Contato
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Nome:</th>
                                        <td> Priscila Campos</td>
                                        <td> - </td>
                                        <td>
                                            <div class="pop">
                                                <div tabindex="0" class="btnn btn-lg tx tx" role="button"
                                                    data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                    data-bs-content="Numero: (00) 00000-0000
            Estado:-------
            Cidade:-------">
                                                    Contato
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Nome:</th>
                                        <td> Leandro Santos</td>
                                        <td> - </td>
                                        <td>
                                            <div class="pop">
                                                <div tabindex="0" class="btnn btn-lg tx" role="button"
                                                    data-bs-toggle="popover" data-bs-trigger="focus" title="Dados do Colaborador"
                                                    data-bs-content="Numero: (00) 00000-0000 Estado:------- Cidade:-------">
                                                    Contato
                                                </div>
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
                    </div>
                </div>
            </form>
        </div>
</>
    )

}