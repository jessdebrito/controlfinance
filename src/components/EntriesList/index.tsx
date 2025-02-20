import { Dispatch, SetStateAction, FC } from "react";
import { EntryCard } from "./EntryCard";
import styles from "./styles.module.scss";

interface Entry {
  id: string;
  value: number;
  categoryID: number;
}

interface EntriesListProps {
  type: "Todos" | "Entradas" | "Saídas";
  entries: Entry[];
}

export const EntriesList: FC<EntriesListProps> = ({ type, entries }) => {
  return (
    <section className={styles.container}>
      <div className={styles.totalInfo}>
        <p>Soma dos valores</p>
        <p>
          {entries
            .reduce((acc, cur) => {
              if (type === "Todos") {
                return cur.categoryID === 0 ? acc + cur.value : acc - cur.value;
              } else if (type === "Entradas") {
                return cur.categoryID === 0 ? acc + cur.value : acc;
              } else {
                return cur.categoryID === 1 ? acc + cur.value : acc;
              }
            }, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <ul>
        {entries
          .filter((entry) =>
            type === "Todos"
              ? true
              : type === "Entradas"
              ? entry.categoryID === 0
              : entry.categoryID === 1
          )
          .map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
      </ul>
    </section>
  );
};