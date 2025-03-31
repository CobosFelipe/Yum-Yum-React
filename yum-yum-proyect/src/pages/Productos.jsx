import React from 'react'
import ProductCard from '../components/Productos/ProductCard'

const Productos = () => {
  return (
    <>
        <div className='container flex m-auto justify-center my-4 p-2 gap-4'>
        <ProductCard name="Penes pequeños" price="$15.250" img="https://tumayorferretero.net/22457-large_default/producto-generico.jpg"/>
        <ProductCard name="Aretes Blancos" price="$11.250" img="https://tumayorferretero.net/22457-large_default/producto-generico.jpg"/>
        </div>
        
    </>
  )
}

export default Productos