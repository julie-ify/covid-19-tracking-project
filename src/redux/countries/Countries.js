const GET_COUNTRIES = 'Covid_19_tracking_project/Countries/GET_COUNTRIES';

const initialState = [];

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
  }
};

export default reducer;