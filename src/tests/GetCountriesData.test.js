import getCountriesData from '../API/GetCountriesData';
import { dateFunc } from '../API/GetCountriesData';

describe('test API', () => {
  let todayDate = '';
  let result = {};

  beforeEach(() => {
    todayDate = dateFunc();
    result = {
      dates: {
        [todayDate]: {
          countries: {
            Spain: {
              id: 'france',
              total_confirmed: 7164924,
            },
            Australia: {
              id: 'australia',
              total_confirmed: 133441,
            },
          },
        },
      },
    };
  });
  it('returns an array of objects', () => {
    const dataAPI = getCountriesData();
    const dataArray = Object.values(dataAPI.dates[todayDate].countries);
    expect(dataArray.[0]).toEqual(expect.objectContaining({ id: 'spain' }));
  });
});
