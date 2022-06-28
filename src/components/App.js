import React from "react";
import "../styles/App.css";

const slides = [
  {
    title: "Nature flower",
    text: "all in pink",
    color: "#FD3555",
    img: "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Bluuue Sky",
    text: "with it's mountains",
    color: "#2A86BA",
    img: "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80",
  },
  {
    title: "Lonely castle",
    text: "in the wilderness",
    color: "#252E33",
    img: "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80",
  },
  {
    title: "Flying eagle",
    text: "in the sunset",
    color: "#FFB866",
    img: "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80",
  },
];

const LeftSlider = ({ slides }) => {
  return (
    <div
      className="left-slide"
      style={{ top: `-${(slides.length - 1) * 100}vh` }}
    >
      <div style={{ backgroundColor: `blue` }}>
        <h1>title</h1>
        <p>text</p>
      </div>
    </div>
  );
};

const RightSlider = ({ slides }) => {
  return (
    <div className="right-slide">
      <div style={{ backgroundImage: `url("URLHERE")` }}></div>
    </div>
  );
};

const App = () => {
  const changeSlide = (direction) => {};

  return (
    <div id="main">
      <div className="slider-container">
        <LeftSlider slides={slides} />
        <RightSlider slides={slides} />
        <div className="action-buttons">
          <button className="down-button">
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
