export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      console.log(state.car.features);
      // Checks if the feature is already added to the car. If so, just returns state, or not, adds the feature
      if (state.car.features.includes(action.payload)) {
        return state;
      } else {
        return {
          ...state,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        };
      }

    default:
      return state;
  }
};
