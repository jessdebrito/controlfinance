import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={"title1"}>
       
        <span>Controle</span> 
        <img src={logo} alt="Controle Financeiro Logo"/>
         Financeiro
      </h1>
    </header>
  );
};