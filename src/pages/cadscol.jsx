import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Footer from '../components/estrutura/footer'
import Header from '../components/estrutura/header'
import '../CSS/DoadoresCadastro.css'

const Cadscol = () => {
       
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [sNome, setSNome] = useState("")
    const [data, setData] = useState("")
    const [cpf, setCpf] = useState("")
    const [tel, setTel] = useState("")
    const [senha, setSenha] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [cidade, setCidade] = useState("")
    const [uf, setUf] = useState("")
    const [sex, setSex] = useState("")


    const user = {
        id: 0,
        cpf: cpf,
        nome: nome,
        sNome: sNome,
        data:data,
        tel: tel,
        sex:sex,
        senha: senha,
        email: email,
        logradouro: logradouro,
        cidade: cidade,
        uf:uf
    }
    const submit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify(user))
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(user)
            }
            const response = await fetch("http://localhost:8080/", config)
            //const json = await response.json()
            if (response.ok) {
                console.log("deu certo")
                navigate("/login")
                return response
            } else {
                alert("email já cadastrado !")
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header />
            <div class="container">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">

                </button>
                <form class="cadastro container conteudo my-4 px-4" action="form" onSubmit={submit}>
                    <h2>Cadastro Colaborador</h2>
                    <div class="colaborador" id="cads">
                        <div class="dados">
                            <div class="inputs">
                                <label for="name">Nome:</label><br />
                                <input id="doc" type="text" name="nome" placeholder="Digite seu Nome" onChange={(e) => setNome(e.target.value)} required />
                            </div>
                            <div>
                                <label for="name">Sobrenome:</label><br />
                                <input id="doc" type="text" name="nome" placeholder="Digite seu Sobrenome" onChange={(e) => setSNome(e.target.value)} required />
                            </div>
                            <div class="inputs">
                                <label for="doc">Data de Nascimento:</label><br />
                                <input id="doc" type="date" name="doc" placeholder="" required onChange={(e) => setData(e.target.value)} />
                            </div>
                            <div class="inputs">
                                <label for="doc">CPF/CNPJ:</label><br />
                                <input id="doc" type="text" name="doc" placeholder="Digite seu CPF ou CNPJ" onChange={(e) => setCpf(e.target.value)} required />

                                <div class="gen-p">
                                    <input type="radio" id="none" name="gener" />
                                    <label for="none">Pessoa Fisica</label>
                                </div>
                                <div class="gen-p">
                                    <input type="radio" id="none" name="gener" />
                                    <label for="none">Pessoa Juridica</label>
                                </div>
                            </div>
                            <div class="inputs">
                                <label for="email">Email:</label><br />
                                <input id="doc" type="email" name="email" placeholder="Digite seu Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div class="inputs">
                                <label for="password">Escolha a Senha:</label><br />
                                <input id="doc" type="password" name="Senha" placeholder="Digite a senha" onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                            <div class="inputs">
                                <label for="number">Celular com o DDD:</label><br />
                                <input id="doc" type="tel" name="number" placeholder="Digite seu Numero" onChange={(e) => setTel(e.target.value)} required />
                            </div>
                            <div class="gen-imput">
                                <input type="radio" id="none" name="gener" onChange={(e) => setSex(e.target.value)} />
                                <label for="none">Feminino</label>
                            </div>
                            <div class="gen-imput">
                                <input type="radio" id="none" name="gener"onChange={(e) => setSex(e.target.value)} />
                                <label for="none">Masculino</label>
                            </div>
                            <div class="gen-imput">
                                <input type="radio" id="none" name="gener" onChange={(e) => setSex(e.target.value)}/>
                                <label for="none">Prefiro não dizer</label>
                            </div>
                        </div>
                        <div class="end">
                            <h4>Preencha abaixo com seu Endereço</h4>
                            <div class="inputs">
                                <label for="end" class="form-label"> Logradouro:</label><br />
                                <input type="text" id="doc" placeholder="Endereço,n,bairro" onChange={(e) => setLogradouro(e.target.value)} />
                            </div>
                            <div class="inputs">
                                <label for="end" class="form-label">Cidade:</label><br />
                                <input type="text" id="doc" placeholder="Nome da sua Cidade" onChange={(e) => setCidade(e.target.value)}  />
                            </div>
                            <div class="inputs">
                                <label for="Cep" class="form-label">UF:</label><br />
                                <input type="text" id="doc" placeholder="Digite seu Cep" onChange={(e) => setUf(e.target.value)}  />
                            </div>
                            <br />
                            {/*<!--Termo-->*/}
                            <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
                            <h3 class="dark" for="btn-check-outlined" >Termos e
                                Condições</h3>
                            <div id="modal-termo" class="modal-container  modal-dialog-centered modal-dialog-scrollable">
                                <div class="termo">
                                    
                                    <h5 class="subtitulo">Termos e Condições de uso para Colaboradores</h5>
                                    <p class="te">
                                        Seja bem-vindo ao nosso site.<br />
                                        Leia com atenção todos os termos abaixo.<br />
                                        Este documento, e todo o conteúdo do site é oferecido por (PARA SEMEAR)<br />
                                        A permanência no website implica-se automaticamente na leitura e aceitação tácita do
                                        presente termos de uso a seguir.<br />


                                        1. DA FUNÇÃO DO SITE<br />
                                        Buscamos através da divulgaçao, desenvolvido por profissionais da área, fazer com que as
                                        instituicoes sejam
                                        conhecidas ao alcance de todos, e atraves disso possam receber mas recursos para apliar e
                                        manter seus projetos.<br />
                                        Nesta plataforma, poderá ser realizado tanto a divulgação das instituicoes, suas metas e
                                        areas alcançadas.<br />
                                        Todo o conteúdo presente neste site foi desenvolvido buscando fontes e materiais de
                                        confiabilidade, assim como são baseados
                                        em estudos sérios e respeitados, através de pesquisa de alta nível.<br />
                                        É de responsabilidade da Colaborador colocar todas as informações verdadeiras sobre a
                                        mesma.<br />

                                        2. DAS OBRIGAÇÕES DO COLABORADOR <br />
                                        Os colaboradores ao utilizar o website, concorda integralmente em:
                                        De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, hacker, destruir
                                        ou prejudicar a estrutura do site,
                                        ou de seus parceiros. Incluindo-se, mas não se limitando, ao envio de vírus de computador,
                                        de ataques de DDOS, de acesso indevido
                                        por falhas da mesma ou quaisquer outras formas e meios.<br />
                                        Da proibição em reproduzir qualquer conteúdo de natureza indevida ou falsa, podendo
                                        responder civil e criminalmente pelo mesmo.
                                        Com a Política de Privacidade do site, assim como tratamos os dados referentes ao cadastro e
                                        visita no site, podendo a qualquer momento e forma,
                                        requerer a exclusão dos mesmos, através do formulário de contato.
                                        <br />
                                        3. DO ACEITE DOS TERMOS<br />
                                        Este termo especifica e exige que todo Colaborador ao acessar o site, leia e compreenda
                                        todas as cláusulas do mesmo,
                                        visto que ele estabelece entre o ParaSemear e o Colaborador direitos e obrigações entre
                                        ambas as partes, aceitos expressamente
                                        pelo colaborador para realizar o cadastro e permanecer no site.<br />
                                        Ao continuar acessando o site, o Colaborador expressa que aceita e entende todas as
                                        cláusulas, assim como concorda integralmente
                                        com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o
                                        Colaborador discorde de alguma cláusula ou
                                        termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as
                                        formas e meios.<br />
                                        Este termo pode e irá ser atualizado periodicamente pelo ParaSemear, que se resguarda no
                                        direito de alteração,
                                        com aviso prévio e comunicação pelo o email informado no ato do cadastro. É importante que a
                                        Colaborador confira
                                        sempre se houve movimentação e qual foi a última atualização.<br /></p>
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" required />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Aceito os Termos e Condições de
                                            Uso</label>
                                </div>
                            </div>


                        </div>
                    </div>
                    <a class="btnn tx" href="./logcol" role="button">Cadastrar</a>
                </form>
            </div>
            <Footer />
        </>
    )

}
export default Cadscol;