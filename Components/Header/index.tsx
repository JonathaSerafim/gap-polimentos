import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import LogoGap from "../../public/gap-logo-cream.png";

const HeaderComponent = () => (
    <header>
    <div className={styles["head"]}>
    <Image className={styles["gap-logo"]} src={LogoGap} alt="Logo da Gap"></Image>
    <div className={styles["head-menu"]}>
        <button><a className={styles["menu-item"]} href="#services">Serviços</a></button>
        <button><a className={styles["menu-item"]} href="#about">Sobre nós</a></button>
        <button><a className={styles["menu-item"]} href="#cta">Orçamento</a></button>
    </div>
    </div>
    </header>
)

export default HeaderComponent