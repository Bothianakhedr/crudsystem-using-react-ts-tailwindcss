import { formInput, productInfo } from "./Components/data/index.ts";
import Modal from "./Components/ui/Modal/Modal";
import ProductCard from "./Components/ProductCard/ProductCard";
import { useState } from "react";
import Button from "./Components/ui/ReusableButton/Button";
import ReusableInput from "./Components/ui/ReusableInput/ReusableInput.tsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <main className="my-4 container mx-auto">
      <Button onClick={open} className="bg-indigo-600 w-full  mb-5">
        open Modal
      </Button>

      <div className=" mx-auto gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productInfo.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      <Modal isOpen={isOpen} onClose={close} title="ADD NEW PRODUCT">
        {formInput.map((input) => (
          <form>
            <label
              className="text-[12px] mb-1 font-medium text-gray-700"
              htmlFor={input.id}
            >
              {input.label}
            </label>
            <ReusableInput type="text" name={input.name} id={input.id} />
          </form>
        ))}
        <div className="flex items-center space-x-3 mt-8 ">
          <Button width="w-full" className="bg-indigo-600 ">
            Edit
          </Button>
          <Button width="w-full" className="bg-gray-600">
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
