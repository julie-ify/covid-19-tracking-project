describe('test API', () => {
  const result = {
    dates: {
      date: {
        countries: {
          Spain: {
            id: 'spain',
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

  const dataArray = Object.values(result.dates.date.countries);
  it('returns the country name', () => {
    expect(dataArray[0].id).toMatch('spain');
  });

  it('returns countries total confirmed cases ', () => {
    expect(dataArray[1].total_confirmed).toEqual(133441);
  });
});
