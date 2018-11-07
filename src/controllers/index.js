const user = require('./user');
const city = require('./city');
const profile = require('./profile');
const transaction = require('./transaction');
const repayment = require('./repayment');
const investor_investment = require('./investorinvestment');
const active_loan = require('./activeloan');
const auth_controll = require('./auth');

module.exports = {
    user,
    city,
    profile,
    transaction,
    repayment,
    investor_investment,
    active_loan,
    auth_controll
};