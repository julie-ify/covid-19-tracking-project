/* eslint-disable */
export const dateFunc = () => {
  const date = new Date();
  const d = date.toLocaleDateString();
  const day = d.split('/').reverse();
  const b = day.splice(1, 1).join('');
  day.push(b);

  return day.join('-');
};

const getCountryData = async () => {
  const todayDate = dateFunc();
  const response = await fetch(
    `https://api.covid19tracking.narrativa.com/api/${todayDate}/country/Spain`
  );
  const dataResult = await response.json();
  return dataResult;
};

export default getCountryData;
