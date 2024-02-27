import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="flat-infomation">
              <li className="phone">
                Call us:{" "}
                <a href="tel:+02127000953" title="phone">
                  0212 700 09 53 (TR)
                </a>
              </li>
              <li className="email">
                Email:{" "}
                <a href="mailto:info@blueskymarkets.me" title="email">
                  info@blueskymarkets.me
                </a>
              </li>
            </ul>
            <div className="flat-questions">
              {/* <Link to="/contact" title="" className="questions">
                  Have any questions?
                </Link> */}

              <a
                href="https://www.instagram.com/bluesky.markets/?igshid=OGQ5ZDc2ODk2ZA%3D%3D "
                target="_blank"
              >
                <i
                  className="fa-brands fa-instagram fa-xl"
                  style={{ color: "#74C0FC" }}
                ></i>
              </a>
              <a href="https://x.com/BlueSkyForex?s=20" target="_blank" style={{marginRight:10,marginLeft:10}}  >
                <i
                  className="fa-brands fa-twitter fa-xl "
                  style={{ color: "#74C0FC" }}
                ></i>
              </a>

              <Link to="/contact" title="" className="appointment">
                GET AN APPOINTMENT
              </Link>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
