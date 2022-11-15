
import React from "react"
import Doador from "../IMG/doador.png"
import Voluntario from "../IMG/voluntario.png"
import Instituicao from "../IMG/instituicao.png"
import Logof from "../IMG/logo/logo-fundo.png"
import Imgfundo from "../IMG/logo/logo-esq.png"
import"../CSS/index.css"
import Header from "../components/estrutura/header"


export default function Home() {
    return (
        <>
        <Header/>
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active bloco01">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={Doador} class="img-ca" alt="..." style={{verticalAlign:"middle"}} />
                                <div class="texto-slide p-4 tx-slide">
                                    <h1 class="mx-5">Venha ser a engrenagem na roda da educação</h1>
                                    <a href="./cadscol" class="btn bt-slide mx-5">Seja um colaborador</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item bloco01">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={Instituicao} class="img-ca" alt="..." style={{verticalAlign:"middle"}} />
                                <div class="texto-slide px-5 py-4 tx-slide">
                                    <h1 class="mx-5">Vamos girar a roda juntos...</h1>
                                    <a href="./cadsinst" class="btn bt-slide mx-5">Inscreva sua instituição</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item bloco01">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={Voluntario} class="img-ca" alt="..." style={{verticalAlign:"middle"}} />
                                <div class="texto-slide px-5 py-4 tx-slide">
                                    <h1 class="mx-5">Faça parte da mudança...</h1>
                                    <a href="./cadscol" class="btn bt-slide mx-5">Seja um voluntário</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="bloco02 p-5">
                <div class="d-flex justify-content-center align-items-center bloco02">
                    <img src={Logof} alt="" className="img-fundo" />
                    <div class="texto-slide px-5 py-4 tx-pg">
                        <h1 class="mx-5"><big>Quem somos ...</big></h1>
                        <h5 class="mx-5">Somos um grupo que acreditamos que todos tem o direito de se comunicar e participar da
                            sociedade e a escrita
                            é um dos maiores meios de comunicação, portanto ter acesso a leitura abre as portas para se comunicar com o
                            mundo. </h5>
                    </div>
                </div>
            </div>
            <div class="bloco02">
                <div class="d-flex justify-content-end align-items-center">
                    <img class="img-fundo" src={Imgfundo} alt="" />
                    <div class="texto-slide px-5 py-4 tx-pg">
                        <h1 class="mx-5 text-start"><big>Conheça nossos parceiros</big></h1>
                        <h5 class="mx-5">Em construção...</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
