describe('test API', () => {
  const result = {
    dates: {
      date: {
        countries: {
          Spain: {
            regions: [
              {
                id: 'aragon',
                name: 'Aragon',
                date: '2021-10-13',
              },
              {
                id: 'canarias',
                name: 'Canarias',
                date: '2021-10-13',
              },
              {
                id: 'madrid',
                name: 'Madrid',
                date: '2021-10-13',
              },
            ],
          },
          Italy: {
            regions: [
              {
                id: 'marche',
                name: 'Marche',
                date: '2021-10-13',
              },
              {
                id: 'liguria',
                name: 'Liguria',
                date: '2021-10-13',
              },
              {
                id: 'puglia',
                name: 'Puglia',
                date: '2021-10-13',
              },
            ],
          },
        },
      },
    },
  };

  const dataArray = Object.values(result.dates.date.countries);
  it('returns Aragon', () => {
    expect(dataArray[0].regions[0]).toMatchObject({
      id: 'aragon',
      name: 'Aragon',
      date: '2021-10-13',
    });
  });

  it('returns Canarias ', () => {
    expect(dataArray[0].regions[1]).toMatchObject({
      id: 'canarias',
      name: 'Canarias',
      date: '2021-10-13',
    });
  });

  it('returns Madrid ', () => {
    expect(dataArray[0].regions[2]).toMatchObject({
      id: 'madrid',
      name: 'Madrid',
      date: '2021-10-13',
    });
  });

  it('returns Marche ', () => {
    expect(dataArray[1].regions[0]).toMatchObject({
      id: 'marche',
      name: 'Marche',
      date: '2021-10-13',
    });
  });

  it('returns Liguria ', () => {
    expect(dataArray[1].regions[1]).toMatchObject({
      id: 'liguria',
      name: 'Liguria',
      date: '2021-10-13',
    });
  });

  it('returns Puglia ', () => {
    expect(dataArray[1].regions[2]).toMatchObject({
      id: 'puglia',
      name: 'Puglia',
      date: '2021-10-13',
    });
  });
});
