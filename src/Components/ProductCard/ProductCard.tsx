import type { IProduct } from "../interfaces/product";
import ReusableImage from "../ReusableImage/ReusableImage";
import Button from "../ui/Button";

interface IProps {
  product:IProduct
}

const ProductCard = ({product}: IProps) => {
  const{title,description,imageURL,price,id,category}=product
  return (
    <div className="border border-gray-200 rounded p-3 ">
      <ReusableImage
        className="rounded object-cover h-55 w-full mb-2"
        alt={title}
        imageURL={imageURL}
      />
      <h3 className="text-[16px]">{title}</h3>
      <p className="my-1 text-[14px] line-clamp-3 text-slate-700">
        {description}
      </p>

      <div className="flex gap-1">
        <div className="w-5 h-5 rounded-full  cursor-pointer bg-indigo-600"></div>
        <div className="w-5 h-5 rounded-full cursor-pointer bg-orange-600"></div>
        <div className="w-5 h-5 rounded-full cursor-pointer bg-green-600"></div>
      </div>

      <div className="flex justify-between items-center my-5">
        <span>{price}</span>

        <ReusableImage
          className="w-5 h-5 rounded-full object-bottom"
          alt={title}
          imageURL={imageURL}
        />
      </div>

      <div className="flex items-center justify-center gap-2 ">
        <Button width="w-full" onClick={()=>{alert("edited")}} className="bg-blue-700  ">EDIT</Button>
        <Button  width="w-full" className="bg-red-900 "> DESTROY</Button>
      </div>
    </div>
  );
};

export default ProductCard;
