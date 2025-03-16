import React from 'react'
import Carrousel from '../components/Carrousel'
//Importando imagenes del carrousel
import banner1 from '../assets/imgs/Banner1.png'
import banner2 from '../assets/imgs/Banner2.png'
import banner3 from '../assets/imgs/Banner3.png'

const Inicio = () => {
    const imagenList = [
        banner1,
        banner2,
        banner3,
    ];
  return (
    <Carrousel images={imagenList}/>
  )
}
export default Inicio
