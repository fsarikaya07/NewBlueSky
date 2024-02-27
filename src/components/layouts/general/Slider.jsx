import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      id="banner-container"
      className="rev_slider_wrapper fullwidthbanner-container"
      data-alias="classic4export"
      data-source="gallery"
    >
      <div
        id="banner-slide"
        className="rev_slider fullwidthabanner"
        data-version="5.3.0.2"
      >
        <div className="slotholder"></div>
        <ul>
          <li
            data-index="rs-3049"
            data-transition="slideremovedown"
            data-slotamount="7"
            data-hideafterloop="0"
            data-hideslideonmobile="off"
            data-easein="Power4.easeInOut"
            data-easeout="Power4.easeInOut"
            data-masterspeed="2000"
            data-rotate="0"
            data-saveperformance="off"
            data-title="Ken Burns"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            <img
              src="images/BLUESKY/Bluesky.jpg"
              alt=""
              data-bgposition="center center"
              data-kenburns="off"
              data-duration="30000"
              data-ease="Linear.easeNone"
              data-scalestart="100"
              data-scaleend="120"
              data-rotatestart="0"
              data-rotateend="0"
              data-offsetstart="0 0"
              data-offsetend="0 0"
              data-bgparallax="10"
              className="rev-slidebg"
              data-no-retina
            />

            <div
              className="tp-caption title-slide color-white letter-spacing3px"
              id="slide-3049-layer-1"
              data-x="['left','left','left','left']"
              data-hoffset="['39','39','39','39']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['-105','-77','-77','-77']"
              data-fontsize="['55','52','45','35']"
              data-lineheight="['60','57','50','40']"
              data-fontweight="['600','600','600','600']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="text"
              data-responsive_offset="on"
              data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
            >
              Blue Sky Markets is a broker company operating since 2017 innovate
              and grow
            </div>

            <div
              className="tp-caption sub-title color-white"
              id="slide-3049-layer-4"
              data-x="['left','left','left','left']"
              data-hoffset="['37','37','37','37']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['30','30','30','0']"
              data-fontsize="['20',18','18','14']"
              data-lineheight="['30','28','28','24']"
              data-fontweight="['400','400','400','400']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="text"
              data-responsive_offset="on"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
            >
              Featuring the MetaTrader4 and MetaTrader5 trading platforms, we
              provide our customers with a 5/24 service.
            </div>

            <Link
              to="#"
              className="tp-caption flat-button-slider bg-blue"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
              data-x="['left','left','left','left']"
              data-hoffset="['36','36','36','36']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['140','140','140','80']"
            >
              Our Company
            </Link>

            <Link
              to="#"
              className="tp-caption flat-button-slider bg-transparent"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
              data-x="['left','left','left','left']"
              data-hoffset="['205','205','205','205']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['140','140','140','80']"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
