const formatToCurrency = (amount) =>
  '$' + ' ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // eslint-disable-line

export default formatToCurrency;
