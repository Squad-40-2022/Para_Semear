import React from 'react'
import social from '../IMG/imagens/social.png';
import trans from '../IMG/imagens/transformar.webp';
import sem from '../IMG/imagens/semente de esperança.jpg';
import manha from '../IMG/imagens/educadoamanha.png';

export default function InstCol() {
    return (
        <div className="MinhInst">
            <form>
                <h2> Minhas Instituições </h2>
                <p class="destaque"> Veja as as instituições que transforma vidas através da sua contribuição </p>
                <section>
                    <div class="card mb-3">
                        <div class="front">
                            <img src={social} className="Ong-logo" alt="ong" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> Instituto Ler a Esperamça</h5>
                            <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                            <p class="card-text">o instituto ler a esperança apoia escolas em zonas rurais no estadao Maranhao, sao atendidos em torno de 1200 pessoas a missao This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Contato: (51) 00000-0000</small></p>
                            <button type="button" class="btn btn-outline-primary">Contribuir agora</button>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="front">
                            <img src={trans} className="Ong-logo" alt="ong" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> Fundação Transformar</h5>
                            <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                            <p class="card-text">fundaçao Transforma apoia escolas em zonas rurais no estadao Maranhao, sao atendidos em torno de 1200 pessoas a missao This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                            <p class="card-text"><small class="text-muted">Contato: (51) 00000-0000</small></p>
                            <button type="button" class="btn btn-outline-primary">Contribuir agora</button>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="front">
                            <img src={sem} className="Ong-logo" alt="ong" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> Instituto Transformar</h5>
                            <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                            <p class="card-text">o instituto ler a esperança apoia escolas em zonas rurais no estadao Maranhao, sao atendidos em torno de 1200 pessoas a missao This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Contato: (51) 00000-0000</small></p>
                            <button type="button" class="btn btn-outline-primary">Contribuir agora </button>
                        </div>
                    </div>
                    <div class="card mb-3">

                        <div class="card-body">
                            <div class="front">
                                <img src={manha} className="Ong-logo" alt="ong" />
                            </div>
                            <h5 class="card-title"> Associção Educadores do Amanhã</h5>
                            <p> Contribuição: <b>SUA ULTIMA CONTRIBUIÇÃO FOI 12/01/2022</b></p>
                            <p class="card-text">o instituto ler a esperança apoia escolas em zonas rurais no estadao Maranhao, sao atendidos em torno de 1200 pessoas a missao This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Contato: (51) 00000-0000</small></p>
                            <button type="button" class="btn btn-outline-primary">Contribuir nagora</button>
                        </div>
                    </div>
                </section>
            </form>
        </div>

    )

}