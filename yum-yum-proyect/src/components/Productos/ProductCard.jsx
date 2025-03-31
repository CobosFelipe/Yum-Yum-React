import styles from '../../styles/product-card.module.css'

const ProductCard = ({ name, price, img }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm">
      {/* Espacio para la imagen del producto*/}
      <div className="w-64 h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
        <img src={img} className="w-64 h-64" />
      </div>

      {/* Contenedor de la data del producto */}
      <div className={`w-50 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg border-1 ${styles.card}`}>
        {/* Nombre del producto */}
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">{name}</h3>
        {/* Espacio para el precio del producto y agregar al carrito */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-200">
          <span className="font-bold text-gray-800">{price}</span>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
