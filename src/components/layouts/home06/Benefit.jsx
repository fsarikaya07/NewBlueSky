import React from "react";
import { Link } from "react-router-dom";

const Benefit = () => {
  const itembox = [
    {
      id: 1,
      title: "Easy Deposit",
      classicon: "icon-benefit",
      boxcontent: "Lightning Network payments",
    },
    {
      id: 2,
      title: "Variety of financial instruments",
      classicon: "icon-benefit options",
      boxcontent: "A wide range of financial instruments for trading",
    },
    {
      id: 3,
      title: "Reliable and Trustworthy",
      classicon: "icon-benefit people",
      boxcontent: "Start Your Trading Journey with a Reliable Trading Platform",
    },
    {
      id: 4,
      title: "User Protection",
      classicon: "icon-benefit caculator",
      boxcontent: "Bluesky Markets Guarantees Maximum Security for User Funds",
    },
    {
      id: 5,
      title: "Stocks, Currencies, Commodity, Metals",
      classicon: "icon-benefit global",
      boxcontent:
        "Invest your fiat money or crypto in Forex, cryptocurrencies, indices...",
    },
    {
      id: 6,
      title: "Global Trading Platform",
      classicon: "icon-benefit magic",
      boxcontent: "Traders all over the world use Bluesky platform",
    },
  ];

  return (
    <section className="flat-row parallax parallax1 flat-benefit ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="benefit-image">
              <img src="./images/benefit/01.png" alt="financial" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {itembox.map((data) => (
                <div className="iconbox-item" key={data.id}>
                  <div className="iconbox style3">
                    <div className="box-header">
                      <div className={data.classicon}></div>
                      <div className="box-title">
                        <Link to="#" title="">
                          {data.title}
                        </Link>
                      </div>
                    </div>
                    <div className="box-content">{data.boxcontent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- /.flat-benefit -->
  );
};

export default Benefit;
