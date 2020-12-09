import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  // const [total, setTotal] = useState(props.headerReducer.additionalPrice);
  // console.log(total, "TOTAL AMOUNT");

  const onClick = e => {
    props.addFeature(Number(e.target.value));
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button value={props.feature.price} onClick={onClick} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
