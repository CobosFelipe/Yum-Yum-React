import ListTags from "../../utils/ListTags";

const ProductTable = ({ productos, loading, onEdit, onDelete }) => {
  const { TH, TD } = ListTags();

  if (loading) {
    return <div className="text-center p-8">Cargando productos...</div>;
  }

  if (productos.length === 0) {
    return <div className="text-center p-8 text-gray-500">No hay productos para mostrar.</div>;
  }

  return (
    <div className="w-full max-w-6xl my-4 bg-white shadow-lg rounded-lg overflow-x-auto border-1 border-violet-300">
      <table className="min-w-full table-fixed divide-y divide-violet-200">
        <thead className="bg-gray-50">
          <tr>
            <TH className="px-3 text-violet-600">ID</TH>
            <TH className="text-left text-violet-600">Nombre</TH>
            <TH className="max-w-34 pr-2 text-right text-violet-600">Precio</TH>
            <TH className="max-w-36 text-violet-600">Disponible</TH>
            <TH className="max-w-28 text-violet-600">Cantidad</TH>
            <TH className="text-violet-600">Acciones</TH>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productos.map((producto) => (
            <tr key={producto.product_id} className="hover:bg-gray-50">
              <TD className="text-center select-none">{producto.product_id}</TD>
              <TD>{producto.product_name}</TD>
              <TD className="w-32 pr-2 text-right">$ {producto.price.toLocaleString("es-CO")}</TD>
              <TD className="w-34 text-center select-none">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    producto.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {producto.available ? "Sí" : "No"}
                </span>
              </TD>
              <TD className="w-24 text-center select-none">{producto.quantity}</TD>
              <TD className="flex justify-center gap-3 text-center">
                {/* Botón editar */}
                <button onClick={() => onEdit(producto)} className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer">
                  Editar
                </button>
                {/* Botón eliminar */}
                <button onClick={() => onDelete(producto)} className="text-red-500 hover:text-red-700 hover:cursor-pointer">
                  Eliminar
                </button>
              </TD>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
