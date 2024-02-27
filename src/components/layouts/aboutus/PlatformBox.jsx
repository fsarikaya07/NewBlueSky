import React, { Component } from "react";
import AboutSlider from "../general/AboutSlider";

class PlatformBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgslide: [
        {
          id: "1",
          srcimg: "images/BLUESKY/Bluesky.jpg",
        },
        {
          id: "2",
          srcimg: "images/BLUESKY/Bluesky.jpg",
        },
      ],
      content: [
        {
          id: "1",
          title: "Want to know more about Finance Plus?",
          description:
            "In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
      ],
      blogtimeline: [
        {
          id: "1",
          year: "2012",
          title: "Start with a small service",
          description:
            "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
        },
        {
          id: "2",
          year: "2013",
          title: "Website Design, Seo Makerting Online",
          description:
            "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
        },
        {
          id: "3",
          year: "2014",
          title: "Developer WordPress Themeforest.net",
          description:
            "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="flexslider s2">
          <div className="flat-slides">
            <ul className="slides">
              <img src="images/BLUESKY/slider3.jpg" alt="about" />
            </ul>
          </div>
        </div>
        <div className="box-content backgroundColorWhite">
          <div className="title">What is a Demo Account?</div>
          <h>Fastest Way of Secure Investments</h>
          <p>
            Even if you do not have any investment or trading experience, you
            too, may want to step into Forex, the world’s largest market with a
            daily transaction volume of over 5 trillion dollars, and get your
            own share of it. With a demo account, we offer you the opportunity
            to test yourself beforehand so that you do not risk your capital
            while evaluating your strategies and measuring the impact of your
            predictions.. <br />
            <br />
            Demo Account can also be seen as a trial account. Although it works
            just like a real account does, you can see the results of your
            transactions and try your strategies without risking your money as
            you will not be actually funding it. There is no real money
            transactions in a demo account. Trading is done only as a trial and
            you can see possible scenarios.
            <br />
            <br /> The prices of the pairs offered by the demo account are the
            same as the real ones. At this point, investors learn about the
            operation of the market over real price ratios without taking any
            risks. With the Forex demo account, they can grasp the basic logic
            of the market in a short time.
            <br />
            <br />
            Opening a Forex demo account is very simple. After a few minutes of
            trading, you will receive your demo account login information.
            <br />
            <br />
          </p>
          <div className="dividers dividers-bc-v4"></div>
        </div>
      </div>
    );
  }
}

export default PlatformBox;
