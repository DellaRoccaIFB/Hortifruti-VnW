import React, { Component } from "react";
import "./App.css";
import Alface from "./img/alface.png";
import Laranja from "./img/laranja.png";
import Cereja from "./img/cereja.png";
import Cenoura from "./img/cenoura.png";
import Manga from "./img/manga.png";
import Limão from "./img/limao.png";
import Beterraba from "./img/beterraba.png";
import Tomate from "./img/tomate.png";

class App extends Component {
  state = {
    NomeLoja: "HORTIFRUTI",
    frutas: [
      {
        nomeFruta: "Alface",
        imagemFruta: `${Alface}`,
      },
      {
        nomeFruta: "Laranja",
        imagemFruta: `${Laranja}`,
      },
      {
        nomeFruta: "Cereja",
        imagemFruta: `${Cereja}`,
      },
      {
        nomeFruta: "Cenoura",
        imagemFruta: `${Cenoura}`,
      },
      {
        nomeFruta: "Manga",
        imagemFruta: `${Manga}`,
      },
      {
        nomeFruta: "Limão",
        imagemFruta: `${Limão}`,
      },
      {
        nomeFruta: "Beterraba",
        imagemFruta: `${Beterraba}`,
      },
      {
        nomeFruta: "Tomate",
        imagemFruta: `${Tomate}`,
      },
    ],
  };

  render() {
    return (
      <body>
        <section class="mainSection">
          <h1 class="NomeLoja">{this.state.NomeLoja}</h1>
          <div class="ContainerFrutas">
            {this.state.frutas.map((item) => (
              <>
                <img src={item.imagemFruta} />
              </>
            ))}
            <div class="Carrinho"></div>
          </div>
        </section>
      </body>
    );
  }
}

export default App;
