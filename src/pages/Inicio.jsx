import React from "react";

import Carrousel from "../components/Inicio/Carrousel";
import Categorias from "../components/Inicio/Categorias";

//Importando imagenes del carrousel
import banner1 from "../assets/imgs/Banner1.png";
import banner2 from "../assets/imgs/Banner2.png";
import banner3 from "../assets/imgs/Banner3.png";

const Inicio = () => {
  const imagenList = [banner1, banner2, banner3];
  return (
    <>
      <Carrousel images={imagenList} />
      <Categorias />
    </>
  );
};
export default Inicio;
