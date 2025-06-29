import { formInput, productInfo } from "./Components/data/index.ts";
import Modal from "./Components/ui/Modal/Modal";
import ProductCard from "./Components/ProductCard/ProductCard";
import { useState } from "react";
import Button from "./Components/ui/ReusableButton/Button";
import ReusableInput from "./Components/ui/ReusableInput/ReusableInput.tsx";
import { useFormik } from "formik";
import * as Yup from "yup";
interface IForm {
  title: string;
  description: string;
  price: number;
  imageURL: string;
}

function App() {
  const imageUrlRegex = /^https?:\/\/.+/i;
  // const defaultProductObj = {
  //   title: "",
  //   description: "",
  //   imageURL: "",
  //   price: "",
  //   color: [],
  //   category: {
  //     name: "",
  //     imageURL: "",
  //   },
  // };
  const handelSubmit = (values: IForm): void => {
    console.log(values);
  };
  // ^ validationSchema
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object({
    title: Yup.string()
      .required("title is required")
      .max(50, "product title must be between 10 to 50 letters")
      .min(10),
    description: Yup.string()
      .required("description is required")
      .max(400, "product description must be between 10 to 400 letters")
      .min(10),
    imageURL: Yup.string()
      .required("imageURL is required")
      .matches(
        imageUrlRegex,
        "Must be a valid image URL starting with http or https"
      ),
    price: Yup.number()
      .required("price is required")
      .typeError("price must be a number")
      .positive("price must be greater than zero"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: 0,
      imageURL: "",
    },
    onSubmit: handelSubmit,
    validationSchema,
  });
  // ^ ###### validationSchema

  // ########### state
  const [isOpen, setIsOpen] = useState(false);

  /** ########### handler */
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const cancelModal = (): void => {
    formik.resetForm();
    close();
  };

  /** ##################### render ################# */
  const renderProductList = productInfo.map((product) => {
    return <ProductCard product={product} key={product.id} />;
  });

  const renderFormInput = formInput.map((input) => {
    return (
      <div className="my-3" key={input.id}>
        <label
          className="text-gray-500 font-medium text-[12px]"
          htmlFor={input.id}
        >
          {input.label}
        </label>
        <ReusableInput
          type="text"
          id={input.id}
          name={input.name}
          onChange={formik.handleChange}
          value={formik.values[input.name]}
          onBlur={formik.handleBlur}
        />
        {formik.touched[input.name] && formik.errors[input.name] && (
          <p className="text-red-500 text-sm">{formik.errors[input.name]}</p>
        )}
      </div>
    );
  });

  /** ##################### render ################# */

  return (
    <main className="my-4 container mx-auto">
      <Button onClick={open} className="bg-indigo-600 w-full  mb-5">
        open Modal
      </Button>

      <div className=" mx-auto gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} title="ADD NEW PRODUCT" close={close}>
        <form action=" " onSubmit={formik.handleSubmit}>
          {renderFormInput}
          <div className="flex  items-center space-x-3">
            <Button
              type={"submit"}
              width="w-full"
              className="bg-indigo-600 hover:bg-indigo-800"
            >
              submit
            </Button>
            <Button
              onClick={cancelModal}
              width="w-full"
              className="bg-gray-600 hover:bg-gray-800"
              type="button"
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
