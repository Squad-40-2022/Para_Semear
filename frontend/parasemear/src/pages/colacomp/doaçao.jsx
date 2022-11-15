import React from 'react'
import user from '../IMG/user.png';

export default function Doa() {
    return (
      <div class="col-1 d-flex pb-2">
          <form className="doa">
            <div className="doacao">
              <main class="container conteudo my-4 p-4">
                <div class="border-bottom">
                <div class="front">
                    <img src={user} className="Ong-logo" alt="ong" />
                </div>
                  <h2>Maria Silva</h2>
                </div>
              </main>
              <div class="container">
                <div class="mb-4 row justify-content-between">
                  <aside class="col-3 conteudo">
                    <div class="row px-5">
                      <button class="btn bt-menu mt-5"><a href="../colab_acom.html"
                        class="tx">Publicações</a></button>
                      <button class="btn bt-menu"><a href="doacao.html" class="tx">Nova
                        doação</a></button>
                      <button class="btn bt-menu"><a href="colab_inst.html" class="tx">Minhas
                        instituições</a></button>
                      <button class="btn bt-menu"><a href="colab_rel.html" class="tx">Relatório 2021
                        disponível</a></button>
                      <button class="btn bt-menu"><a href="colab_conf.html" class="tx">Configurações
                        e privacidade</a></button>
                    </div>
                  </aside>

                  <section class="col-xl-8 col-12 conteudo cont-fixed p-5">
                    <form action="">
                      <div class="row">
                        <div class="col">
                          <h3 class="title">Doação</h3>
                          <h6>tipo de doação:</h6>
                          <div class="inputBox">
                            <label for="horns">Dinheiro:</label>
                            <input type="radio" id="horns" name="horns"></input>
                          </div>
                          <div class="inputBox">
                            <label for="horns">Outros:</label>
                            <input type="radio" id="horns" name="horns"></input>
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
                          <h6 class="title">Doação anônima?</h6>

                          <div class="inputBox">
                            <label for="horns">Sim:</label>
                            <input type="radio" id="horns" name="horns"></input>
                          </div>

                          <div class="inputBox">
                            <label for="horns">Não:</label>
                            <input type="radio" id="horns" name="horns"></input>
                          </div>

                          <div class="flex">
                            <div class="inputBox">
                              <span>Quantidade</span>
                              <input type="number" placeholder="5"></input>
                            </div>
                            <div class="inputBox">
                              <span>Data</span>
                              <input type="datetime" placeholder="10/2/2022"></input>
                            </div>
                          </div>
                          <div class="mb-3">
                            <label for="formFile" class="form-label">
                              <h6> Coloque aqui o comprovante de pagamento:</h6>
                            </label>
                            <input class="form-control" type="file" id="formFile"></input>
                          </div>
                          <h6>Ao prosseguir você concorda que sua solicitação de doação será direcionada
                            para o site da ong e seus dados armazenados aqui
                            serão apenas para o retorno dos gastos feitos através de recibos.
                          </h6>
                          <input type="checkbox" id="horns" name="horns"></input>
                        </div>
                      </div>
                      <a href="/Para-Semear-main/index.html">
                        <input type="submit" value="Prosseguir com o Checkout" class="submit-btn"></input>
                      </a>
                    </form>
                    <div href="#"><button class="btn bt-ins">Prosseguir com a doação</button></div>
                  </section>
                </div>
              </div>
            </div>
          </form>
          </div>
    )
}