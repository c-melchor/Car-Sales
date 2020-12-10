import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  const onClick = e => {
    props.addFeature(Number(e.target.value));
    // console.log(props.addFeature(Number(e.target.value)));
  };

  // const checkChosen = () => {
  //   let chosen = false;
  //   props.additionalFeatures.forEach(item => {
  //     if (item.id === props.feature.id) {
  //       chosen = true;
  //     }
  //   });
  //   return chosen;
  // };
  return (
    <li>
      <button value={props.feature.price} onClick={onClick} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
