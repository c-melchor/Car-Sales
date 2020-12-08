import React from "react";
import { connect } from "react-redux";

export const Total = props => {
  return (
    <div className="content">
      <h4>
        Total Amount: $
        {props.headerReducer.car.price + props.headerReducer.additionalPrice}
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    car: {
      ...state.headerReducer.car,
      price: state.headerReducer.car.price + state.headerReducer.additionalPrice
    }
  };
};

export default connect(mapStateToProps)(Total);
