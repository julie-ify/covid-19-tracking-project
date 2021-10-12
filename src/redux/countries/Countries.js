import getCountriesData, { dateFunc } from '../../API/GetCountriesData';

const GET_COUNTRIES = 'Covid_19_tracking_project/Countries/GET_COUNTRIES';

const initialState = [];

export const getCountries = () => async (dispatch) => {
  const result = await getCountriesData();
  const data = await result;
  const todayDate = dateFunc();
  const dataArray = Object.values(data.dates[todayDate].countries);
  const countriesData = dataArray.map((country) => ({
    id: country.id,
    name: country.name,
    today_deaths: country.today_deaths,
    today_confirmed: country.today_confirmed,
  }));
  if (countriesData) {
    dispatch({
      type: GET_COUNTRIES,
      payload: countriesData,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
