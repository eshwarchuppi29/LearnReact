import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";
import ProductList from "./ProductList";

export default function AllCatalog() {
  const [products, AddProduct] = useState<Product[]>([]);

  useEffect(() => {
    console.log("Product Initial Loading");

    fetch("http://localhost:5199/api/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        AddProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setProduct = () => {
    AddProduct((prevState) => [
      ...products,
      {
        productId: prevState.length,
        name: "Product" + (prevState.length + 1),
        description: "Descrption" + (prevState.length + 2),
        price: 100,
        image: "",
      },
    ]);
  };

  return (
    <div style={{ margin: "50px" }}>
      <ProductList products={products} setProduct={setProduct}></ProductList>
    </div>
  );
}
