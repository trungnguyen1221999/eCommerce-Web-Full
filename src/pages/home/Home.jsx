import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BestProducts from "../../components/HomeBestProduct/BestProducts";
import getProduct from "../../Axios/getProduct";
import HomeSaleOff from "../../components/HomeSaleOff/HomeSaleOff";

const Home = () => {
  const [productList, setProductList] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProduct();
      try {
        setProductList(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Banner />
      <BestProducts products={productList.contents || []} />
      {/* Pass productList as props */}
      <HomeSaleOff />
    </div>
  );
};

export default Home;
