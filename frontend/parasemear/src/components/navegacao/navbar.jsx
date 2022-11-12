import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light col-10 d-flex align-items-end">
            <a class="navbar-brand" href="../index.html"><img src="../IMG/logo/logo-100px.png" alt=""/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="../HTML/colaboradores.html">Colaboradores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="../HTML/instituicoes.html">Instituições</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="../HTML/ajuda.html">Ajuda</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}