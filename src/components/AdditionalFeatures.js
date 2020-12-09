import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

export const AdditionalFeatures = props => {
  console.log(props);
  return (
    <div className="content">
      <p>HELLO FROM HERE</p>
      <AdditionalFeature />
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
  console.log("state from additional features", state);
  return {
    additionalFeatures: state.AdditionalFeatures
  };
};

export default connect(mapStateToProps)(AdditionalFeatures);
