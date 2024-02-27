import React from "react";
import {
  Footer,
  Header,
  Slider,
  Loader,
  CarouselClient,
  TopBar,
} from "../layouts/general";
import { Featured } from "../layouts/general/featured";
import { Benefit } from "../layouts/home06";
import Currency from "../layouts/Currency";

function Home01() {
  const headers = [
    {
      id: 1,
      names: "Home",
    },
  ];

  return (
    <div className="bg-body3">
      <div className="boxed">
        <Loader />
        <TopBar />
        {headers.map((data) => (
          <Header data={data} key={data.id} />
        ))}
        <Slider />
        <Featured />
        <Benefit />
        <Currency />
        <CarouselClient />
        <Footer />
      </div>
    </div>
  );
}

export default Home01;
