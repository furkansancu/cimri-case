import Head from "next/head";

import Header from "@/components/widgets/Header/Header";
import Sidebar from "@/components/widgets/Sidebar/Sidebar";

import { HomeContainer, HomeWrapper, HomeMain } from "./Home.styles";

function Home() {
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
            <div>content lister</div>
          </HomeMain>
        </HomeContainer>
      </HomeWrapper>
    </>
  )
}

export default Home;