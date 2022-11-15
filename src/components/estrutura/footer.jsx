import React from 'react'
import "../../CSS/index.css"

export default function Footer() {
    return (
        <footer>
            <div class="nav justify-content-between container">
            <div class="col-6 col-sm-5 col-lg-4">
                <h6 class="tx-cinzae">Centrais de atendimento</h6>
                <ul class="nav flex-column">
                    <li>Av. Borges de Medeiros, 159<br>Porto Alegre/RS</br></li>
                    <li>(51)3456-5555</li>
                    <li class="nav-item"><a href="http://api.whatsapp.com/send?1=pt_BR&phone=550000000000" class="nav-link p-0 text-white">Entre em
                            contato</a>
                    </li>
                </ul>
            </div>
            <div class="col-6 col-sm-5 col-lg-4">
                <form>
                    <h6>Deixe seu email para receber nossas ofertas!</h6>
                    <div class="d-flex w-100 gap-2">
                        <input id="newsletter1" type="text" class="form-control" placeholder="Digite seu email"/>
                        <button class="btn btn-light" type="button">Inscrever</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
            <p class="m-0 text-center">© 2022 Company, Inc. All rights reserved.</p>
        </div>

        </footer>
    )
}