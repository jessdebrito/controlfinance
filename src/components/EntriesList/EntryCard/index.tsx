import styles from "./styles.module.scss";
import TrashImg from "../../../assets/trash.svg";

interface Entry {
  value: number;
  categoryID: number;
}

interface EntryCardProps {
  entry: Entry;
}
export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return (
    <li className={styles.card}>
      <p>
        {entry.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div>
        <span>{entry.categoryID === 0 ? "Entrada" : "Saída"}</span>
        <button>
          <img src={TrashImg} alt="Imagem de lixeira" />
        </button>
      </div>
    </li>
  );
};
