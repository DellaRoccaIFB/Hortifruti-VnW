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
import Carrinho from "./img/ShoppingCart.png"

class App extends Component {
  state = {
    NomeLoja: "HORTIFRUTI",
    SubtituloLoja: "Nossos Produtos",
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
    ImagemCarrinho: `${Carrinho}`,
  };

  render() {
    return (
      <body>
        <section class="mainSection">
          <h1 class="NomeLoja">{this.state.NomeLoja}</h1>
          <h3 class="VnW">VnW</h3>
          <h3 class="SubtituloLoja">{this.state.SubtituloLoja}</h3>
          <div class="FrutasECarrinho">
            <section class="ContainerFrutas">
              <div class="BoxFrutas">
                {this.state.frutas.map((item) => (
                  <>
                    <img class="imagemFruta" src={item.imagemFruta} />
                  </>
                ))}
              </div>
            </section>
            <div class="Carrinho">
              <div class="RetanguloArredondado">
                <img src={this.state.ImagemCarrinho} alt="ImagemCarrinho"/>
                <p class="DescricaoCarrinho">Arraste o produto aqui para colocar no carrinho</p>
              </div>
              <div class="PlusAndMinusButton">
                <button class="PlusButton"><div class="line1"></div><div class="line2"></div></button>
                <button class="MinusButton"><div class="line3"></div></button>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}

export default App;
