// Sliders.jsx
import Slider from "react-infinite-logo-slider";

const Sliders = ({ items }) => {
  return (
    <Slider width="250px" duration={20} pauseOnHover={true} blurBorders={false} blurBorderColor={"#fff"}>
      {items.map((item, index) => (
        <Slider.Slide key={index} className="my-2">
          {item}
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default Sliders;
