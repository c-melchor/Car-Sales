import React from "react";
import { connect } from "react-redux";

export const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state,
    car: {
      ...state.car,
      price: state.car.price
    }
  };
};

export default connect(mapStateToProps)(Total);
