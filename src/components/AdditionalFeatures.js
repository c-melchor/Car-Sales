import React from "react";
// import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  console.log("props on additional features", props);
  return (
    <div className="content">
      <p>HELLO FROM ADDitional features</p>
      {/* <AdditionalFeature /> */}
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
    ...state
  };
  //   return {
  //     additionalFeatures: state.featuresReducer.AdditionalFeatures
  //   };
};

export default connect(mapStateToProps)(AdditionalFeatures);
