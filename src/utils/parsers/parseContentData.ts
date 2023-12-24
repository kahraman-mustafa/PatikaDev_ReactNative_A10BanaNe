export default data => {
  if (!data) {
    return [];
  } else {
    return Object.keys(data)
      .map(key => ({
        id: key,
        ...data[key],
      }))
      .sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      });
  }
};

// Data on Firebase
// {
//   '-NlgrSl_yQ0lZLKDC2nS': {
//     date: '2023-12-15T09:45:27.854Z',
//     text: 'Herkes susup beni dinleyebilir mi?!',
//     username: 'mustafa',
//   },
//   '-NlhCebWJXd9j3Jn-PUH': {
//     date: '2023-12-15T11:22:27.340Z',
//     text: 'Darla beni',
//     username: 'mustafa',
//   },
// }

// Object.keys() => ['-NlgrSl_yQ0lZLKDC2nS', '-NlhCebWJXd9j3Jn-PUH']
// map() =>
// [
//   {
//     id: '-NlgrSl_yQ0lZLKDC2nS',
//     date: '2023-12-15T09:45:27.854Z',
//     text: 'Herkes susup beni dinleyebilir mi?!',
//     username: 'mustafa',
//   },
//   {
//     id: '-NlhCebWJXd9j3Jn-PUH',
//     date: '2023-12-15T11:22:27.340Z',
//     text: 'Darla beni',
//     username: 'mustafa',
//   },
// ]
