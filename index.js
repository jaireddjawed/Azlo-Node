/*
 * Jaired Jawed (jaireddjawed.7@gmail.com)
 * Sep 22, 2018
 * Azlo API Wrapper v0.12
 */

var request = require('request');
var baseURL = 'https://developer-api.azlo.com/v1';

/**
 *
 * @summary Azlo Api Wrapper
 * @param {String} apiKey The Api Key of the user
 */

module.exports = function (apiKey) {
  var baseRequest = {
    method: 'GET',
    json: true,
    headers: {
      Authorization: apiKey,
    },
  };

  return {
    accounts: {
      list: function (queryParams, callback = null) {
        baseRequest.url = `${baseURL}/accounts?unmask=${queryParams.unmask}`;

        var getAccounts = function(resolve, reject) {
          request(baseRequest, function (error, response, body) {
            if (error) {
              reject(error);
            } else {
              resolve(body);
            }
          });
        };

        return callback && typeof callback === 'function' ?
          getAccounts(callback.bind(null, undefined), callback) : new Promise(getAccounts);
      },
    },
    tranactions: {
      list: function (accountId, queryParams, callback = null) {
        baseRequest.url = `${baseURL}/accounts/${accountId}/transactions
          ?posted_date_from=${queryParams.postedDateFrom}
          &posted_date_to=${queryParams.postedDateTo}
          &amount_from=${queryParams.amountFrom}
          &amount_to=${queryParams.amountTo}
          &start=${queryParams.start}
          &limit${queryParams.limit}
          `;

        var getAccountTransactions = function(resolve, reject) {
          request(baseRequest, function(error, response, body) {
            if (error) {
              reject(error);
            } else {
              resolve(body);
            }
          });
        };

        return callback && typeof callback === 'function' ?
          getAccountTransactions(callback.bind(null, undefined), callback) : new Promise(getAccountTransactions);
      },
    },
  };
};
