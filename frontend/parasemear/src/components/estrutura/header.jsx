import React from "react";
import Navbar from "../navegacao/navbar";
import Logar from"./logar";

export default function Header(){
    return(
        <header>
        <div class="container">
            <div class="row">
               
                <Navbar/>
                <Logar/>
               
            </div>
        </div>
    </header> 
    )
}