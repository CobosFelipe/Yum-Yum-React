import BannersModal from "./BannersModal";
import CreateProductModal from "./CreateProductModal";
import CategoryModal from "./CategoryModal";
import DeleteProductModal from "./DeleteProductModal";
import EditProductModal from "./EditProductModal";

const ModalContainer = ({ bannersModal, editModal, createModal, categoryModal, deleteModal, onProductUpdate, onProductCreated, onProductDeleted }) => {
  return (
    <>
      {/* Modal de Edición de Producto */}
      {editModal.isOpen && editModal.data && <EditProductModal product={editModal.data} onClose={editModal.closeModal} onSave={onProductUpdate} />}

      {/* Modal de Creación de Producto */}
      {createModal.isOpen && <CreateProductModal onClose={createModal.closeModal} onSave={onProductCreated} />}

      {/* Modal de Categoría */}
      {categoryModal.isOpen && <CategoryModal onClose={categoryModal.closeModal} onSave={categoryModal.closeModal} />}

      {/* Modal de Eliminación */}
      {deleteModal.isOpen && deleteModal.data && <DeleteProductModal product={deleteModal.data} onClose={deleteModal.closeModal} onSave={onProductDeleted} />}
      
      {/* Modal gestion de Banner */}
      {bannersModal.isOpen && <BannersModal onClose={bannersModal.closeModal}/>}
    </>
  );
};

export default ModalContainer;
