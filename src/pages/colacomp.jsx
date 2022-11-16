import React from 'react'
import Header from '../components/estrutura/header';
import user from '../IMG/user.png';
import user30 from '../IMG/user-30px.png';
import Footer from '../components/estrutura/footer';

export default function ColAcom() {
    return (
<>
<Header/>
        <div class="container">
            <div className="AcompCol">
                <div className='acomp'>
                    <main class="container conteudo my-5 p-5">
                        <div class="border-bottom">
                            <h2>Maria Silva</h2>
                            <div class="front">
                                <img src={user} className="Ong-logo" alt="ong" />
                            </div>
                        </div>
                    </main>
                    <div class="container">
                        <div class="mb-4 row justify-content-between">
                            <aside class="col-3 conteudo">
                                <div class="row px-5">
                                    <button class="btn bt-menu mt-5"><a href="colab_acom.html" class="tx">Publicações</a></button>
                                    <button class="btn bt-menu"><a href="./doaçao" class="tx">Nova
                                        doação</a></button>
                                    <button class="btn bt-menu"><a href="./colinst" class="tx">Minhas
                                        instituições</a></button>
                                    <button class="btn bt-menu"><a href="./colRel"
                                        class="tx">Relatório 2021 disponível</a></button>
                                    <button class="btn bt-menu"><a href="./ajuda" class="tx">Configurações
                                        e privacidade</a></button>
                                </div>
                            </aside>
                            <section class="col-xl-8 col-12 conteudo cont-fixed p-5">
                                <article class="border-bottom">
                                    <div class="d-flex mb-3">
                                        <div class="front">
                                            <img src={user30} className="Ong-logo" alt="ong" />
                                        </div>
                                        <h6 class="px-4">Nome Instituição</h6>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis. Neque
                                            necessitatibus
                                            maiores, officia, aut ullam atque qui molestiae tempora praesentium facere animi sit
                                            consequuntur ratione? Similique est sed officia.</p>
                                    </div>
                                    <div class="border-bottom border-top d-flex">
                                        <button class="btn">        </button>
                                        <button class="btn">        </button>
                                        <button class="btn">        </button>

                                    </div>
                                    <div>
                                        <div class="m-4">
                                            <div class="d-flex mb-2">

                                                <h6 class="px-4">Nome Usuário</h6>
                                            </div>
                                            <div class="coment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis.
                                                    Neque
                                                    necessitatibus
                                                    maiores, officia, aut ullam atque qui molestiae tempora praesentium facere
                                                    animi sit
                                                    consequuntur ratione? Similique est sed officia.</p>
                                            </div>
                                        </div>
                                        <div class="m-4">
                                            <div class="d-flex mb-2">

                                                <h6 class="px-4">Nome Usuário</h6>
                                            </div>
                                            <div class="coment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis.
                                                    Neque
                                                    necessitatibus
                                                    maiores, officia, aut ullam atque qui molestiae tempora praesentium facere
                                                    animi sit
                                                    consequuntur ratione? Similique est sed officia.</p>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <textarea class="coment-form" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva seu comentário..."></textarea>
                                        </div>
                                    </div>
                                </article>
                                <article class="border-bottom">
                                    <div class="d-flex mb-3">
                                        <div class="front">
                                            <img src={user30} className="Ong-logo" alt="ong" />
                                        </div>
                                        <h6 class="px-4">Nome Instituição</h6>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis. Neque
                                            necessitatibus
                                            maiores, officia, aut ullam atque qui molestiae tempora praesentium facere animi sit
                                            consequuntur ratione? Similique est sed officia.</p>
                                    </div>
                                    <div class="border-bottom border-top d-flex">
                                        <button class="btn">   </button>
                                        <button class="btn">   </button>
                                        <button class="btn">   </button>

                                    </div>
                                    <div>
                                        <div class="m-4">
                                            <div class="d-flex mb-2">

                                                <h6 class="px-4">Nome Usuário</h6>
                                            </div>
                                            <div class="coment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis.
                                                    Neque
                                                    necessitatibus
                                                    maiores, officia, aut ullam atque qui molestiae tempora praesentium facere
                                                    animi sit
                                                    consequuntur ratione? Similique est sed officia.</p>
                                            </div>
                                        </div>
                                        <div class="m-4">
                                            <div class="d-flex mb-2">

                                                <h6 class="px-4">Nome Usuário</h6>
                                            </div>
                                            <div class="coment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis.
                                                    Neque
                                                    necessitatibus
                                                    maiores, officia, aut ullam atque qui molestiae tempora praesentium facere
                                                    animi sit
                                                    consequuntur ratione? Similique est sed officia.</p>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <textarea class="coment-form" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva seu comentário..."></textarea>
                                        </div>
                                    </div>
                                </article>
                                <article class="border-bottom">
                                    <div class="d-flex mb-3">
                                        <div class="front">
                                            <img src={user30} className="Ong-logo" alt="ong" />
                                        </div>
                                        <h6 class="px-4">Nome Instituição</h6>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis. Neque
                                            necessitatibus
                                            maiores, officia, aut ullam atque qui molestiae tempora praesentium facere animi sit
                                            consequuntur ratione? Similique est sed officia.</p>
                                    </div>
                                    <div class="border-bottom border-top d-flex">
                                        <button class="btn">   </button>
                                        <button class="btn">   </button>
                                        <button class="btn">   </button>
                                    </div>
                                    <div>
                                        <div class="m-4">
                                            <div class="d-flex mb-2">

                                                <h6 class="px-4">Nome Usuário</h6>
                                            </div>
                                            <div class="coment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis.
                                                    Neque
                                                    necessitatibus
                                                    maiores, officia, aut ullam atque qui molestiae tempora praesentium facere
                                                    animi sit
                                                    consequuntur ratione? Similique est sed officia.</p>
                                            </div>
                                        </div>
                                        <div class="m-4">
                                            <div class="d-flex mb-2">

                                                <h6 class="px-4">Nome Usuário</h6>
                                            </div>
                                            <div class="coment">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, nobis.
                                                    Neque
                                                    necessitatibus
                                                    maiores, officia, aut ullam atque qui molestiae tempora praesentium facere
                                                    animi sit
                                                    consequuntur ratione? Similique est sed officia.</p>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <textarea class="coment-form" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva seu comentário..."></textarea>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}