import { Route, Routes } from "react-router-dom";
import { Pokedex } from "../Pokedex";
import { Pokemon } from "../Pokemon";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
      </Routes>
    </>
  );
}
