import { useState } from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img_06 from "./assets/Img_06.png"
import App from "./App";
export function Admin() {

  return (
    
    <body>
      <div className="night">
        <div className="surface"></div>
        <div className="car">
          <img src={img_06} alt=""/>
          
        </div>
        <section>
        
      <div className="form-box">
        
                <div className="form-value">
                  
                    <form action="">
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required/>
                            
                            <label for="">correo</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required/>
                            <label for="">contraseña</label>
                        </div>
                        <div className="forget">
                            <label for=""><input type="checkbox"/>recuerda  <a href="#">mi contraseña</a></label>
                          
                        </div>
                        <button>Log in</button>
                        <div className="register">
                            <p>no tienes cuenta? <a refe={App}>crear cuenta</a></p>
                        </div>
                        
                        
                    </form>
                    <button href="App">inicio</button>
                </div>
                
            </div>
            
      </section>
      
      </div>
 
    </body>
  );
}
