const getCovidData = async (date) => {
  const response = await fetch(
    `https://api.covid19tracking.narrativa.com/api/${date}`
  );
  return response.json();
};

const countries = [
  'Spain',
  'Germany',
  'France',
  'Italy',
  'Netherlands',
  'Belgium',
  'Portugal',
  'Switzerland',
  'Denmark',
  'United Kingdom',
];

const getData = (data, date) => {
  const rawData = data.dates[date].countries;

  const dataObj = Object.entries(rawData);
  const dataArray = [];
  dataObj.map(([country, value]) => {
    countries.map((eachCountry) => {
      if (eachCountry === country) {
        const { id } = value;
        const confirmedCases = value.today_confirmed;
        dataArray.push({ id, country, confirmedCases });
      }
    });
  });
  console.log(dataArray);
  return dataArray;
};

export { getCovidData, getData };
