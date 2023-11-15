import "./index.css";

import axios from "axios";
// import Header from "../Header";
import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";

function Products() {
  const [product, setProduct] = useState([]);

  const getFormattedSimilarData = (data) => ({
    title: data.title,
    price: data.price,
    images: data.images[0],
    id: data.id,
  });

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      const detailsResponse = response.data;
      const c = detailsResponse.products.map((eachSimilarJob) =>
        getFormattedSimilarData(eachSimilarJob)
      );
      setProduct(c);
      console.log(c);
    };
    callApi();
  }, []);

  return (
    <div className="homeMainContainer">
      {/* <Header /> */}

      <div className="productNameContainer">
        <h1 className="productsName">Products</h1>
      </div>

      <div>
        <ul className="ulProducts">
          {product.map((eachProduct) => (
            <ProductCard details={eachProduct} key={eachProduct.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;