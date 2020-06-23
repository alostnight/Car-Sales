import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = (props) => {
  return (
    <div className="content">
      <h2>Buy extra items here:</h2>
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Thank You for Adding All Items!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, {})(AdditionalFeatures);
