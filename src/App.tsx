import { useContext } from "react";
import "./App.css";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { IProduct } from "./models";
import { ModalContext } from "./Context/ModalContext";

function App(): JSX.Element {
  const { products, error, loading, addProduct } = useProducts();

  const { open, modal, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      {modal && (
        <Modal onClose={close} text="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
}

export default App;
