import { productInfo } from "./Components/data/productInfo";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <main className="my-4">

      <div className="container mx-auto gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{productInfo.map((product)=>{
  return  <ProductCard product={product} key={product.id} />
})}
      </div>
    </main>
  );
}

export default App;
