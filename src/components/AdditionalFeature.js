import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  const addFeature = featureName => {
    props.addFeature(props.feature.name);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  addFeature
};

export default connect(
  state => state,
  mapDispatchToProps
)(AdditionalFeature);
