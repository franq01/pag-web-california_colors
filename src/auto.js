import { useState } from "react";
import img_1 from "./assets/Img_1.png"
import Img_02 from "./assets/Img_02.png"
import img_06 from "./assets/Img_06.png"
import $ from 'jquery';

import { addIcons } from 'ionicons';
import { IonIcon } from '@ionic/react';
import "./Style.css";
export const Admin1 =() =>{
    let [usuario, setUsuario] = useState("");
  let [password, setPassword] = useState("");
  const inputs = document.querySelectorAll("#inputs");
  const alerta = document.getElementById("alerta");
    return(
        <div class="night">
        <div class="surface"></div>
        <div class="car">
        <img src={img_06} alt="" />
            
        </div>
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="">
                        <h2>Login</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            
                            <input
                            type="text"
                            id="inputs"
                            className="inputs"
                            placeholder="Usuario"
                            onChange={(e) => {
                            setUsuario(e.target.value);
                            }}
                        ></input>
                            <label for="">correo</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                            type="password"
                            id="inputs"
                            className="inputs"
                            placeholder="Contraseña"
                            onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            ></input>
                            
                            <label for="">contraseña</label>
                        </div>
                        
                        <div class="forget">
                            <input
                            type ="checkbox">recuerda <a href="#">mi contraseña</a></input>
                                
                          
                        </div>
                        <label for=""></label>
                        <button>Log in</button>
                        <div class="register">
                            <p>no tienes cuenta? <a href="#">crear cuenta</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    </div>
    
    );
}