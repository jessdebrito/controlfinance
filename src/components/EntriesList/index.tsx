import { Dispatch, SetStateAction } from "react";
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

export const EntriesList = ({ type, entries }: EntriesListProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.totalInfo}>
        <p>Soma dos valores</p>
        <p>
          {type === "Todos"
            ? entries
                .reduce(
                  (acc, cur) =>
                    cur.categoryID === 0 ? acc + cur.value : acc - cur.value,
                  0
                )
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
            : type === "Entradas"
            ? entries
                .reduce(
                  (acc, cur) => (cur.categoryID === 0 ? acc + cur.value : acc),
                  0
                )
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
            : entries
                .reduce(
                  (acc, cur) => (cur.categoryID === 1 ? acc + cur.value : acc),
                  0
                )
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
        </p>
      </div>
      <ul>
        {type === "Todos"
          ? entries.map((entry) => <EntryCard key={entry.id} entry={entry} />)
          : type === "Entradas"
          ? entries
              .filter((entry) => entry.categoryID === 0)
              .map((entry) => <EntryCard key={entry.id} entry={entry} />)
          : entries
              .filter((entry) => entry.categoryID === 1)
              .map((entry) => <EntryCard key={entry.id} entry={entry} />)}
      </ul>
    </section>
  );
};