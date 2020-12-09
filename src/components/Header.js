import React from "react";
import { connect } from "react-redux";

export const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state, "HEADER STATE HERE");
  return {
    additionalPrice: state.headerReducer.additionalPrice,
    car: {
      ...state.headerReducer.car,

      features: state.headerReducer.car.features,
      image: state.headerReducer.car.image,
      price: state.headerReducer.car.price
    }
  };
};

export default connect(mapStateToProps)(Header);
