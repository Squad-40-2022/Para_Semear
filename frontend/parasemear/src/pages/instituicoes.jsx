import React from 'react'
import Header from '../components/estrutura/header'
import Footer from '../components/estrutura/footer'

<<<<<<< Updated upstream:frontend/parasemear/src/pages/instituiçoes.jsx
export default function institucoes() {
=======
export default function Instituicoes() {
>>>>>>> Stashed changes:frontend/parasemear/src/pages/instituicoes.jsx
    return (
<>
<h1>ola</h1>
<Header/>
        <div class="col-1 d-flex align-items-end pb-2">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="../IMG/Icon-login.png" alt="" />
            </button>
            <div className="Institu">
          <form className="inst">
            <div class="profile-area">
              <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="img1"><img src="../IMG/92471.png" class="card-img-top" alt=""></img>
                        <div class="img2">
                          <img src="" alt=""/>
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
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-area">
              <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="img1"><img src="../IMG/92471.png" class="card-img-top" alt=""></img>
                        <div class="img2">
                          <img src="../IMG/imagens.colaboradores/ACEMT LOGO.png" alt=""></img>
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
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-area">
              <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="img1"><img src="#" class="card-img-top" alt=""></img>
                        <div class="img2">
                          <img src="../IMG/imagens.colaboradores/ACEMT LOGO.png" alt=""></img>
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
            </div>

          </form>
        </div>
        </div>
        <Footer/>
</>
    )

}