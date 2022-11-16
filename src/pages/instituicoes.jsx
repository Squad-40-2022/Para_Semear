import React from 'react';
import Header from '../components/estrutura/header';
import Footer from '../components/estrutura/footer'
import ACEMT from '../IMG/imagens.colaboradores/ACEMT LOGO.png';
import User from '../IMG/user.png'

export default function Instituicoes() {
  return (
    <>
      <Header />
      <div class="container">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="../IMG/Icon-login.png" alt="" />
        </button>
        <section class="container">
          <div class="profile-area">
            <div class="row g-3">
              <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="img1">
                        <img src="../IMG/imagens.colaboradores/ACEMT LOGO.png" class="card-img-top" alt=""/></div>
                      <div class="img2">
                        <a href="instituicao1.html">
                          <img src={ACEMT} alt=""/></a>
                      </div>
                      <div class="main-text">
                        <h2>ACEMT</h2>
                        <p>A ACEMT é uma associação sem fins lucrativos
                          que tem a missão de construir programas sociais
                          ligados à promoção de Cultura e Educação para
                          comunidades em situação de vulnerabilidade. </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="img1">
                        <img src="../IMG/92471.png" class="card-img-top" alt=""/></div>
                      <div class="img2"><a href="instituicao1.html">
                        <img src={User} alt=""/></a>
                      </div>
                      <div class="main-text">
                        <h2>ONG2</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Ad harum doloremque odit, nemo illo soluta dolor dolorem
                          eos corrupti a ullam sed aliquid? Inventore qui sapiente voluptate commodi
                          numquam nisi.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="img1">
                        <img src="../IMG/92471.png" class="card-img-top" alt=""/></div>
                      <div class="img2"><a href="instituicao1.html">
                        <img src={User} alt=""/></a>
                      </div>
                      <div class="main-text">
                        <h2>ONG3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur accusamus
                          minima autem veritatis cum distinctio quisquam,
                          nostrum animi adipisci repellendus eaque beatae facilis fugiat, excepturi . </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )

}