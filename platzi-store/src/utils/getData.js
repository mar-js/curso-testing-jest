const GET_DATA = api => fetch(api)
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.error('ERROR EN EL GET_DATA: ', err));

export default GET_DATA;
