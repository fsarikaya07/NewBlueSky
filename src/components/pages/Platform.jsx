import React from "react";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { Link } from "react-router-dom";
import Form from "../layouts/form/Form";
function Platform() {
  const headers = [
    {
      id: 1,
      names: "Why Do I Need To Use Financial ?",
    },
  ];

  const titleheading = [
    {
      id: "1",
      title: "Why Do I Need To Use Financial ?",
    },
  ];

  const breadcrumbs = [
    {
      id: 1,
      title: "Home",
      classicon: "fa fa-angle-right",
      aria: "true",
    },
    {
      id: 2,
      title: "Why Do I Need To Use Financial ?",
      classicon: "",
      aria: "",
    },
  ];

  const list = [
    {
      id: 1,
      text: "Customer experience, which includes the impression the homepage and overall design style give the customers their satisfaction when they interact with the site and perform tasks.",
    },
    {
      id: 2,
      text: "Service-level, which looks at responsiveness and reliability of websites – scores them on how quickly they respond to user commands and such factors as average downtime.",
    },
    {
      id: 3,
      text: "Best practices, such as ease of use, quality, availability and security – site managers must be compliant with data laws requiring them to protect customer information and the integrity of customer accounts.",
    },
  ];

  const datablog = [
    {
      id: "1",
      srcimg: "images/blog/blog-post-01.png",
      title: "WHY DO I NEED TO USE FINANCIAL ?",
      time: "11 Jan 2021",
      author: "admin",
      category: "Business",
      comments: "No comment",
      description:
        "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, semper ligula. Nullam vel enim risus. Integer rhoncus hendrerit sem egestas porttitor. Integer et mi sed dolor eleifend pretium quis ut velit. Nam sit amet arcu feugiat, consequat orci at, ultrices magna ",
      description1:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      description2:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
  ];

  const tabcloud = [
    {
      id: "1",
      tablink: "Creative",
    },
    {
      id: "2",
      tablink: "Portfolio",
    },
    {
      id: "3",
      tablink: "ThemeForest",
    },
  ];

  return (
    <div className="bg-body">
      <div className="boxed">
        <Loader />
        <TopBar />
        {headers.map((data) => (
          <Header data={data} key={data.id} />
        ))}
        <div className="page-title backgroundColorWhite">
          <div className="container ">
            <div className="row ">
              <div className="col-md-12">
                <div className="page-title-heading">
                  {titleheading.map((data) => (
                    <h1 key={data.id} className="h1-title">
                      {data.title}
                    </h1>
                  ))}
                </div>
                <ul className="breadcrumbs">
                  {breadcrumbs.map((data) => (
                    <li key={data.id}>
                      <Link to="#" title="">
                        {data.title}
                        <i
                          className={data.classicon}
                          aria-hidden={data.aria}
                        ></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="main-content ">
        <div className="d-flex  justify-content-center align-items-center">

          <img src="images/BLUESKY/platformimg.jpg" alt="about"  className="img-fluid" width={800}/>
        </div>
          <div className="container backgroundColorWhite">
            <div className="">
              <div className=" justify-content-center align-items-center ">
                <div className="post-wrap">
                  <article className="main-post">
                    <div className="entry-post-title">
                      <h2 className="post-title">
                        <Link to="#" title="">
                          What is a Demo Account?
                        </Link>
                      </h2>
                    </div>
                    <div className="entry-content">
                      {list.map((item) => (
                        <p key={item.id}>{item.text}</p>
                      ))}
                    </div>
                  </article>
                </div>
                <div className="main-single"></div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Platform;
