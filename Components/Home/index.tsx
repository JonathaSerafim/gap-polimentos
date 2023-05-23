import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import GapTeam from "../../public/anderson-pastor.jpg";
import Seta from "../../public/Assetona.png";
import HeaderComponent from "../Header/index";
import FooterComponent from "../Footer/index";
import classNames from "classnames";

const HomeComponent = () => (
<section className={styles["big-boss"]}>
    <HeaderComponent></HeaderComponent>
    <section className={ classNames(styles["section"], styles["first"])}>
        <h1 className={styles["home-title"]}>O brilho que sua casa Merece</h1>
        <a href="#about"> <Image src={Seta} alt="setinha" className={styles["Seta"]}></Image> </a>
    </section>

    <section className={ classNames(styles["section"], styles["second"])} id="about">
      <div className={styles["who"]}>
        <div className={styles["what-is"]}>
            <h1 className={styles["what-is-title"]}> O que é a GAP</h1>
            <p className={styles["what-is-txt"]}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et  ipsum dolor sit</p>
        </div>
        <Image className={styles["what-is-image"]} src={GapTeam} alt="uma foto da gap"></Image>
      </div>
        <a href="#services"><Image src={Seta} alt="setinha" className={styles["Seta"]}></Image></a>
    </section>
    
    <section className={ classNames(styles["section"], styles["Services"])} id="services">
        <h1 className={styles["servics-title"]}>Serviços</h1>
            <div className={styles["services-list"]}>
                <div className={styles["collum"]}>
                    <button><a className={styles["service-buttom"]}>Limpeza de Areanito</a></button>
                    <button><a className={styles["service-buttom"]}>Limpeza de Granito</a></button>
                    <button><a className={styles["service-buttom"]}>Limpeza de Mármore</a></button>
                    <button><a className={styles["service-buttom"]}>Limpeza de Mosaico Portugês</a></button>
                </div>
                <div className={styles["collum"]}>
                    <button><a className={styles["service-buttom"]}>Limpeza de Pedra Goias</a></button>
                    <button><a className={styles["service-buttom"]}>Limpeza de Pedra Madeira</a></button>
                    <button><a className={styles["service-buttom"]}>Limpeza de Pedra Mineira</a></button>
                    <button><a className={styles["service-buttom"]}>Limpeza de Pedra Miracema</a></button>
                </div>
                <div className={styles["collum"]}>
                    <button><a className={styles["service-buttom"]}>Limpeza de Composé de Mármore</a></button>
                    <button><a className={styles["service-buttom"]}>Polimento de Granito</a></button>
                    <button><a className={styles["service-buttom"]}>Polimento de Mármore</a></button>
                    <button><a className={styles["service-buttom"]}>Polimento de Outras Superficies</a></button>
                </div>
            </div>
            <a href="#cta"><Image src={Seta} alt="setinha" className={styles["{Seta}"]}></Image></a>
    </section>

    <section className={styles["orçamento"]} id="cta">
        <h1 className={styles["servics-title"]}>Faça já um orçamento</h1>
        <form className={styles["form"]} action="https://getform.io/f/b899d803-71a6-4a0c-b8cf-83b182ce1af4" method="POST">
        <label>
            <input
              required
              type="text"
              className={ classNames(styles["form-imput"], styles["name"])}
              placeholder="Nome Completo"
              name="nome"
            />
          </label>
          <label>
            <input
              required
              type="tel"
              className={ classNames(styles["form-imput"], styles["macaco"])}
              placeholder="Número de telefone"
              name="número"
            />
          </label>
          <label>
            <input
              required
              type="email"
              className={ classNames(styles["form-imput"], styles["email"])}
              placeholder="Email"
              name="email"
            />
          </label>
            <div className={styles["form-pack"]}>
              <div className={styles["select-service"]}>
              <select className={ classNames(styles["form-imput"], styles["select"])} id="serviço-desejado" name="serviço" required>
                <option>Selecionar Serviço</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
                <option>serviçoA</option>
              </select>
              </div>
            <label>
              <input
              required
              type="number"
              className={ classNames(styles["form-imput"], styles["metragem"])}
              placeholder="M²"
              name="metragem"
            />
            </label>
            </div>
            <label>
            <input
              required
              type="text"
              className={ classNames(styles["form-imput"], styles["description"])}
              placeholder="Descrição"
              name="description"
            />
          </label>
            <button type="submit" className={styles["btn"]}>Submit</button>
          </form>
    </section>
</section>
)

export default HomeComponent