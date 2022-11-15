import React from 'react'
import Footer from '../components/estrutura/footer'
import Header from '../components/estrutura/header'

export default function Checkout() {
    return (
<>
<Header/>
        <div class="container">
            <div className="Checkout">
          <form className="chec">
            <div class="card">
              <form action="">
                <div class="row">
                  <div class="col">
                    <h3 class="title">Tipo de doação:</h3>
                    <div class="inputBox">
                      <label for="horns">Dinheiro:</label>
                      <input type="checkbox" id="horns" name="horns"></input>
                    </div>
                    <div class="inputBox">
                      <label for="horns">Outros:</label>
                      <input type="checkbox" id="horns" name="horns"></input>
                    </div>
                    <h6>Descreva sua doação:</h6>
                    <textarea name="Decrição" id="descri_doacao" cols="30" rows="5"></textarea>
                    <h6>Qual ONG?</h6>
                    <div class="inputBox">
                      <select name="ONG" id="doacao_ong_select">
                        <option value="ACMT">ACMT</option>
                        <option value="#">Lorem</option>
                        <option value="#">Lorem</option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <div class="inputBox">
                      <span>Número de contato :</span>
                      <input type="number" placeholder="+55 43 22222 4444"></input>
                    </div>
                    <h6 class="title">Doação anônima?</h6>
                    <div class="inputBox">
                      <label for="horns">Sim:</label>
                      <input type="checkbox" id="horns" name="horns"></input>
                    </div>
                    <div class="inputBox">
                      <label for="horns">Não:</label>
                      <input type="checkbox" id="horns" name="horns"></input>
                    </div>
                    <div class="flex">
                      <div class="inputBox">
                        <span>quantidade</span>
                        <input type="number" placeholder="5"></input>
                      </div>
                      <div class="inputBox">
                        <span>Data</span>
                        <input type="datetime" placeholder="10/2/2022"></input>
                      </div>
                    </div>
                    <h6>Ao prosseguir você concorda que sua solicitação de doação será direcionada para o site da ong e seus dados armazenados aqui
                      serão apenas para o retorno dos gastos feitos através de recibos.
                    </h6>
                    <input type="checkbox" id="horns" name="horns"></input>
                  </div>
                </div>
                <a href="/Para-Semear-main/index.html">
                  <input type="submit" value="Prosseguir com o Checkout" class="submit-btn"></input>
                </a>
              </form>
            </div>
          </form>
        </div>
        </div>
        <Footer/>
</>
    )

}