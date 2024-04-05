import React from "react";
import Buttons from "../components/Buttons";

function About() {
  return (
    <div>
      <h1 className="font-bold text-xl m-5">Benvenuto!</h1>
      <div className="mt-5 mb-10">
        <img src="https://images.unsplash.com/photo-1528214096798-37891d32174c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
      <div>
        <p>
          Questa qui sopra è <strong>Matera</strong>, capitale della cultura.
        </p>
        <p className="m-5">
          Questo è <code>Borghi</code>: un progetto nato dal popolo per la
          rinascita dei borghi.
        </p>
        <p>Nasce per la rinascita delle piccole cose.</p>
        <p className=" m-4">
          Rivolto a tutti gli italiani che non smettono di crederci:
        </p>
        <p className="text-xl font-bold m-3">
          imprenditori, creativi, nomadi digitali, freelance, sviluppatori e chi
          ne ha più ne metta.
        </p>

        <p>A tutti quelli che hanno perso la fiducia in questo paese.</p>
        <p>
          A tutti quelli che vogliono vivere nei borghi e che sono stanchi dei
          ritmi delle metropoli.
        </p>
        <p>Dedicato a quelli che non vogliono abbandonare la propria terra.</p>
        <p className="text-l font-bold m-3">
          Dedicato a chi vuole una vita slow.
        </p>
        <p>
          All'interno della piattaforma troverai i borghi più belli e meno
          popolosi che non aspettano altro che essere visitati e abitati.
        </p>
        <p>Sarai tu il prossimo? </p>
        <p>Clicca qui sotto ed entra.</p>

        <Buttons />
      </div>
    </div>
  );
}

export default About;
