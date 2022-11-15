import React from 'react'

export default function Ajuda() {
    return (

        <div class="col-1 d-flex pb-2">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="../IMG/Icon-login.png" alt="" />
            </button>
            <form className="ajuda">
            <div className="aju">
              <h3>Como Podemos lhe Ajudar?</h3>
              <div class="dados" id="dados">
                <label for="exampleFormControlInput1" class="form-label">Seu Nome</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Nome e Sobrenome" required></input>
              </div>
              <div class="dados" id="dados">
                <label for="exampleFormControlInput1" class="form-label">Qual Seu Email?</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required></input>
              </div>
              <div class="dados" id="dados">
                <label for="exampleFormControlTextarea1" class="dados form-label">Defina seu problema.</label>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="sel">
                  <option selected>Selecione</option>
                  <option value="1">Problema com cadsastro Instituiçao</option>
                  <option value="2">Problema com cadastro Doadores</option>
                  <option value="3">Problema com o Login</option>
                  <option value="4">Problema com envio de doaçao</option>
                  <option value="5">Sugestoes</option>
                  <option value="6">Outros</option>
                </select>
              </div>
              <div class="relato" id="dados">
                <label for="exampleFormControlTextarea1" class="form-label">Relate seu problema.</label>
                <textarea class="form-control" id="sel" rows="3" placeholder="Descreva aqui o seu problema."
                  required></textarea>
              </div>
              <button class="btnn btn-light" type="button">Enviar</button>
            </div>
          </form>
        </div>

    )

}