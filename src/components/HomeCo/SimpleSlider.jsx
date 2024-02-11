import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      <div className=" ">
        <div className="flex justify-end gradient">
          <img src="/slides/s2.jpg" alt="" className="h-96" />{" "}
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            top: "5rem ",
            marginLeft: "10rem",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
          className="text-white  text-lg place-items-stretch h-40"
        >
          <div className="text-4xl pb-2">Reframing Technical Debt</div>
          <div className="text-2xl">
            Make the shift from tech debt to organizational debt and achieve{" "}
            <br /> the ultimate business objective – modernization.
          </div>
          <div>
            <button className="button-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------------> */}
      <div className="">
        <div className="flex justify-end gradient">
          <img src="/slides/slide3.png" alt="" className="h-96" />{" "}
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            top: "3rem ",
            marginLeft: "14rem",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
          className="text-black  text-lg place-items-stretch h-40"
        >
          <div className="text-4xl pb-2 font-medium">
            Tim Cook appointed WRKMEN <br /> President and CEO
          </div>
          <div className="text-2xl ">
            “I am incredibly excited to continue working with our global WRKMEN{" "}
            <br />
            team and the Board to execute upon our existing growth strategy{" "}
            <br /> as we deliver value for our shareholders and clients.”
          </div>
          <div>
            <button className="button-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------------> */}
      <div className="">
        <div className="flex justify-end gradient">
          <img src="/slides/bg2.png" alt="" className="h-96" />{" "}
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            top: "3rem ",
            marginLeft: "8rem",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
          className="text-white  text-lg place-items-stretch h-40"
        >
          <div className="text-4xl pb-2 font-medium">
            WRKMEN and AZURE expand their <br /> strategic partnership
          </div>
          <div className="text-2xl ">
            To deliver the future  customers.
          </div>
          <div>
            <button className="button-primary">Learn More</button>
          </div>
        </div>
      </div>
    </Slider>
  );
}

// B7E5B4
// style={{display:"flex",flexDirection:"row"}}
{
  /* <div className="text-4xl pb-2 font-medium">
            Pintu Barman appointed WRKMEN <br /> President and CEO
          </div>
          <div className="text-2xl font-medium">
            “I am incredibly excited to continue working with our global WRKMEN{" "}
            <br />
            team and the Board to execute upon our existing growth strategy{" "}
            <br /> as we deliver value for our shareholders and clients.”
          </div>
          <div>
            <button className="button-primary">Learn More</button>
          </div> */
}

{
  /* <div className="">
          <div className="text-4xl pb-2 font-medium">
            Pintu Barman appointed WRKMEN <br /> President and CEO
          </div>
          <div className="text-2xl font-medium">
            “I am incredibly excited to continue working with our global WRKMEN{" "}
            <br />
            team and the Board to execute upon our existing growth strategy{" "}
            <br /> as we deliver value for our shareholders and clients.”
          </div>
          <div>
            <button className="button-primary">Learn More</button>
          </div>
          
        </div> */
}
