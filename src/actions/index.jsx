export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = featureName => ({
  type: ADD_FEATURE,
  payload: featureName
});
