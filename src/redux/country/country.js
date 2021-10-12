import getCountryData, { dateFunc } from '../../API/GetCountryData';

const GET_COUNTRY = 'Covid_19_tracking_project/Country/GET_COUNTRY';

const initialState = [];

export const getCountry = (payload) => async (dispatch) => {
  const result = await getCountryData(payload);
  const data = await result;
  const todayDate = dateFunc();

  const dataArray = Object.values(data.dates[todayDate].countries);
  const countryData = dataArray.map((country) => ({
    id: country.id,
    name: country.name,
    today_deaths: country.today_deaths,
    today_confirmed: country.today_confirmed,
  }));
  if (countryData) {
    dispatch({
      type: GET_COUNTRY,
      payload: countryData[0],
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
