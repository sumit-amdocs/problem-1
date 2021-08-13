const reorder = require('./app')

const originalList = [
    {name: 'India', population: 10000},
    {name: 'USA', population: 9000},
    {name: 'China', population: 8000},
    {name: 'UK', population: 7000},
    {name: 'France', population: 6000},
    {name: 'Spain', population: 5000},
    {name: 'Greece', population: 4000}
]


test('object reorder', () => {
    const data = reorder(originalList,"India,Spain,Greece");
    expect(data).toEqual([{ name: 'India', population: 10000 },
    { name: 'Spain', population: 5000 },
    { name: 'Greece', population: 4000 },
    { name: 'USA', population: 9000 },
    { name: 'China', population: 8000 },
    { name: 'UK', population: 7000 },
    { name: 'France', population: 6000 }]);
  });