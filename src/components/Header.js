import React from "react";
import { connect } from "react-redux";

export const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price + props.additionalPrice}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: {
      ...state.car,
      features: state.car.features,
      image: state.car.image,
      price: state.car.price
    }
  };
};

export default connect(mapStateToProps)(Header);
