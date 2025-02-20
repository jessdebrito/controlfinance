import { useState } from "react";
import { EntriesList } from "./components/EntriesList";
import { Header } from "./components/Header";
import { RegisterSection } from "./components/RegisterSection";
import { ResumeSection } from "./components/ResumeSection";
import "./styles/index.scss";

interface Entry {
  id: string;
  value: number;
  categoryID: number;
}


function App() {
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: crypto.randomUUID(),
      value: 40.0,
      categoryID: 1,
    },
    {
      id: crypto.randomUUID(),
      value: 150.5,
      categoryID: 1,
    },
    {
      id: crypto.randomUUID(),
      value: 800.5,
      categoryID: 1,
    },
    {
      id: crypto.randomUUID(),
      value: 3500.0,
      categoryID: 0,
    },
  ]);

  const [type, setType] = useState<"Todos" | "Entradas" | "Saídas">("Todos");

  return (
    <>
      <Header />
      <RegisterSection entries={entries} setEntries={setEntries} />
      <ResumeSection setType={setType} />
      <EntriesList type={type} entries={entries} />
    </>
  );
}

export default App;
