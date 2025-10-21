const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Función para generar un rango simple de botones (ej. [1, 2, 3, 4])
  const getPageNumbers = () => {
    // Si no hay páginas o solo hay 1, no renderizar números
    if (totalPages < 1) return []; 
    
    // Generar un array [1, 2, ..., totalPages]
    return [...Array(totalPages).keys()].map(i => i + 1);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="my-8"> {/* Añadido margen vertical para separarlo */}
      <ul className="flex justify-center gap-1 text-gray-900">
        {/* Botón ANTERIOR */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1} // Deshabilita si estás en la primera página
            className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            aria-label="Previous page"
          >
            {/* SVG para flecha izquierda */}
             <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {/* Números de Página Generados Dinámicamente */}
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              // Aplicar clases de activo/inactivo
              className={`block size-8 rounded border text-center text-sm/8 font-medium transition-colors 
                ${number === currentPage 
                  ? 'border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700' // Clase activa
                  : 'border-gray-200 hover:bg-gray-200' // Clase inactiva
                }`}
              aria-current={number === currentPage ? 'page' : undefined}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Botón SIGUIENTE */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // Deshabilita si estás en la última página
            className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 
              ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            aria-label="Next page"
          >
             {/* SVG para flecha derecha */}
             <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;