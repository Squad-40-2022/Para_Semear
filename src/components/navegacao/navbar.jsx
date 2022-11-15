import React from 'react'
import Logo from "../../IMG/logo/logo-100px.png"
import "../../CSS/index.css" 


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light col-10 d-flex align-items-end">
            <a class="navbar-brand" href="./"><img src={Logo} alt=""/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
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
                    <li class="nav-item">
                        <a class="nav-link text-white" href="./ajuda">Ajuda</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
