import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/productsReducer";

import Head from "next/head";

import Header from "@/components/widgets/Header/Header";
import Sidebar from "@/components/widgets/Sidebar/Sidebar";
import ProductList from "@/components/widgets/ProductList/ProductList";

import { HomeContainer, HomeWrapper, HomeMain } from "./Home.styles";

import PRODUCTS_DATA from "../../../../public/data.json";

function Home() {
  const dispatch = useDispatch();

  // Set products to global state once
  useEffect(() => {
    dispatch(setProducts(PRODUCTS_DATA));
  }, []);

  return (
    <>
      <Head>
        <title>Cimri Study Case</title>
      </Head>
      <Header />
      <HomeWrapper>
        <HomeContainer>
          <Sidebar />
          <HomeMain>
            <ProductList
              
              />
          </HomeMain>
        </HomeContainer>
      </HomeWrapper>
    </>
  )
}

export default Home;