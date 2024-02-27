import React from "react";

const CarouselClient = () => {
  const imgCarousel = [
    {
      id: 1,
      srcimg: "images/bank/visa.png",
    },
    {
      id: 2,
      srcimg: "images/bank/master.png",
    },
    {
      id: 3,
      srcimg: "images/bank/discover.png",
    },
    {
      id: 4,
      srcimg: "images/bank/amex.png",
    },
    {
      id: 5,
      srcimg: "images/bank/jcb.png",
    },
  ];

  return (
    <section className="flat-row flat-client bg-theme">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul
              className="flat-carousel"
              data-item="5"
              data-nav="false"
              data-dots="false"
              data-auto="true"
            >
              {imgCarousel.map((data) => (
                <li className="item" key={data.id}>
                  <img src={data.srcimg} alt="img" width={100} />
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.col-md-12 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default CarouselClient;
