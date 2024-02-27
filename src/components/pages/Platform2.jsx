import React from "react";
import { Link } from "react-router-dom";
import { Header, TopBar, Footer, Loader } from "../layouts/general";

import Overview2 from "../layouts/aboutus/Overview";
import PlatformView from "../layouts/aboutus/PlatformView";

function Platform2() {
  const headers = [
    {
      id: 1,
      names: "Pages",
    },
  ];

  const dataBanner = [
    {
      id: 1,
      classename01: "flat-title-page parallax parallax7 style3",
      classename02: "container wrap-title-page ",
      links: "/about-us",
      names: "About Us",
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

        <div className="page-title backgroundColorWhite">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="page-title-heading">
                  <h1 className="h1-title">What is a Demo Account?</h1>
                </div>
                <ul className="breadcrumbs">
                  <li>
                    <Link to="#" title="">
                      Home
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="">
                      Platform
                    </Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>

        <PlatformView />

        <Footer />
      </div>
    </div>
  );
}

export default Platform2;
