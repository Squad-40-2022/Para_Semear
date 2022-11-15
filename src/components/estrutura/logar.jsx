import React from 'react'

export default function Logar() {
    return (
        
            <div class="col-1 d-flex align-items-end pb-2">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="../IMG/Icon-login.png" alt=""/>
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content p-4">
                            <h3 class="mb-4">Olá! Você é?</h3>
                            <button class="btn bt-log mb-4"><a href="../html/login_c.html" class="tx">Colaborador</a></button>
                            <button class="btn bt-log mb-4"><a href="../HTML/log_inst.html" class="tx">Instituição</a></button>
                        </div>
                    </div>
                </div>
            </div>
        
    )

}