export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => {
  console.log(feature, "FEATURE");
  return { type: ADD_FEATURE, payload: feature };
};
