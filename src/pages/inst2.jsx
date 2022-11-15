import React from 'react'
import ACEMTLO from '../IMG/imagens.colaboradores/ACEMT LOGO2.jpg';
import ACEMT from '../IMG/imagens.colaboradores/ACEMT.png';
import "../CSS/instituicoes.css"
import Header from '../components/estrutura/header';
import Footer from '../components/estrutura/footer';

export default function inst2() {
    return (
        <>
            <Header />
            <div class="container">
                <form className="inst2">
                    <div class="container">
                        <div class="row m-0 p-0">

                            <div class="col-12 col-s-m-12 col-md-12 col-lg-8 p-4">
                                <div class="front">
                                    <img src={ACEMTLO} className="Ong-logo" alt="ong" />
                                </div>
                                <div class="front">
                                    <img src={ACEMT} className="Ong-logo" alt="ong" />
                                </div>
                            </div>
                            <div class="col-12 col-s-m-12 col-md-12 col-lg-4 p-5">
                                <h4 class="display-6">Instituição - ACEMT.</h4>
                                <p>A ACEMT é uma associação sem fins lucrativos que tem a missão de construir programas sociais
                                    ligados à promoção de Cultura e Educação para comunidades em situação de vulnerabilidade.
                                </p>
                                <p>
                                    Fundada em 2014, a ACEMT mantem a Escola Madre Teresa,
                                    que oferece ensino gratuito e de qualidade a 120 crianças da zona rural de São José dos Campos,
                                    da Educação Infantil ao 5º ano do Ensino Fundamental.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    )

}