import React from "react";
import Navbar from "../navegacao/navbar";
import Login from"login";

export default function Header(){
    return(
        <header>
        <div class="container">
            <div class="row">
               
                <Navbar/>
                <Login/>
               
            </div>
        </div>
    </header> 
    )
}