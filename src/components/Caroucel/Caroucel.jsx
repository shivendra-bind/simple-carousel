import React from "react";
import "./Caroucel.css";
export const CaroucelItem = ({ active, children, className, ...rest }) => {
  let _className = className + " carousel-item";
  if (active) {
    _className += " active";
  }
  return (
    <div className={_className} {...rest}>
      {children} {active}
    </div>
  );
};

export const Caroucel = ({ children }) => {
  const items = children.length;
  const [activeItem, setActiveItem] = React.useState(0);
  console.log(activeItem, items);

  const next = () => {
    console.log(activeItem, items);
    if (activeItem + 1 < items) {
      setActiveItem(activeItem + 1);
    } else {
      setActiveItem(0);
    }
  };

  const prev = () => {
    if (activeItem > 0) {
      setActiveItem(activeItem - 1);
    } else {
      setActiveItem(items - 1);
    }
  };
  return (
    <div className="carousel slide">
      <div class="carousel-inner">
        {children.map((child, index) =>
          React.cloneElement(child, {
            key: index,
            active: index === activeItem,
          })
        )}
      </div>
      <button className="carousel-control-prev" onClick={() => prev()}>
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={() => next()}>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
