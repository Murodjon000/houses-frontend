const formatToCurrency = (amount: number) =>
  '$' + ' ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export default formatToCurrency;
