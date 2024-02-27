import React from "react";
import { Link } from "react-router-dom";

export default class HeroOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".slider-carousel").length) {
      $(".slider-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        margin: 0,
        nav: false,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-right-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }
  render() {
    return (
      <>
        <section className="slider-one-sec style3 mt-2">
          <div className="slider-carousel owl-carousel owl-theme">
            {/* Start Slider One Single */}
            <div className="slider-one__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("/images/BLUESKY/slider2.jpg")',
                }}
              ></div>
              <div className="container">
                <div className="row clearfix">
                  <div className="col-xl-12">
                    <div className="slider-one__single-content">
                      <h3>Construction Business.</h3>
                      <h2>
                        We build something new <br /> and consistent.
                      </h2>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui <br /> officia deserunt mollit anim id est
                        laborum.{" "}
                      </p>
                      <div className="btn-box">
                        {/* <Link
                          to={`/`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Slider One Single */}

            {/* Start Slider One Single */}
            <div className="slider-one__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("images/BLUESKY/Bluesky.jpg")',
                }}
              ></div>
              <div className="container pl-0">
                <div className="row clearfix">
                  <div className="col-xl-12">
                    <div className="slider-one__single-content text-center">
                      <h3>Our Top Construction.</h3>
                      <h2>
                        A Modern Construction & <br /> Industrial{" "}
                      </h2>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui <br /> officia deserunt mollit anim id est
                        laborum.{" "}
                      </p>
                      <div className="btn-box">
                        {/* <Link
                          to={`/`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Slider One Single */}

            {/* Start Slider One Single */}
            <div className="slider-one__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("images/BLUESKY/slider3.jpg")',
                }}
              ></div>
              <div className="container">
                <div className="row clearfix">
                  <div className="col-xl-12">
                    <div className="slider-one__single-content">
                      <h3>Our Top Construction.</h3>
                      <h2>
                        Best solution for <br />
                        construction
                      </h2>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui <br /> officia deserunt mollit anim id est
                        laborum.{" "}
                      </p>
                      <div className="btn-box">
                        {/* <Link
                          to={`/`}
                          className="thm-btn"
                          data-text="Read More +"
                        >
                          Read More +
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Slider One Single */}
          </div>
        </section>
      </>
    );
  }
}
