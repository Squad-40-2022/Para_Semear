import React from "react";
import LogoLogin from "../../IMG/Icon-login.png"
import Logo from "../../IMG/logo/logo-100px.png"
import "../../CSS/index.css"

function Header(){
    return(
        <header>
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-md navbar-light col-10 d-flex align-items-end">
          <a class="navbar-brand" href="/"><img src={Logo} alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white" href="./colaboradores">Colaboradores</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="./instituicoes">Instituições</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div class="col-1 d-flex align-items-end pb-2">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={LogoLogin} alt=""/>
          </button>
          
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content p-4">
                <h3 class="mb-4">Olá! Você é?</h3>
                <button class="btn bt-log mb-4"><a href="./logcol" class="tx">Colaborador</a></button>
                <button class="btn bt-log mb-4"><a href="./logininst" class="tx">Instituição</a></button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </header>
    )
}
export default Header;