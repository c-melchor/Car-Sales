import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

export const AdditionalFeatures = props => {
  console.log(props, "  props ******");
  return (
    <div className="content">
      {/* <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )} */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state, "ADDDITIONLLL FREATS");
  return {
    additionalFeatures: [
      ...state.AdditionalFeatures,
      {
        id: state.AdditionalFeatures.id,
        name: state.additionalFeatures.name,
        price: state.additionalFeatures.price
      }
    ]
  };
};

export default connect(mapStateToProps)(AdditionalFeatures);
