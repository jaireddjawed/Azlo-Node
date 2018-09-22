var azlo = require('azlo-node')('API_KEY');

/**
 * @summary List All Accounts
 * @param queryParams (Object)
 * @param queryParams.Unmask: (Boolean) Unmasks the account number
 */

function listAccounts() {
  var queryParams = {
    unmask: true
  };

  azlo.accounts.list(queryParams, function (error, response) {
    if (error) {
      console.error(error);
    } else {
      console.log(repsonse);
    }
  });
}

/**
 * @summary List All Transactions
 * @param accountId (String) The account id for which to pull the transaction list
 * @param queryParams (Object)
 * @param queryParams.start (Number) The starting point for pagination (default = 0)
 * @param queryParams.limit (Number) The page size for pagination (default = 25)
 * @param queryParams.amountTo (Number) The maximum amount for filtering by amount (required if amountFrom present)
 * @param queryParams.amountFrom (Number) The minimum amount for filtering by amount (required if amountTo present)
 * @param queryParams.postedDateTo (Date: '2018-06-25') The end date for filtering by date (required if postedDateFrom present)
 * @param queryParams.postedDateFrom (Date: '2018-01-23') The start date for filtering by date (required if postedDateTo present)
 */

function listTransactions() {
  var accountId = 'ACCOUNT_ID';
  var queryParams = {
      start: 5,
      limit: 100
  };

  azlo.tranactions.list(accountId, queryParams, function (error, response) {
    if (error) {
      console.error(error);
    } else {
      console.log(response);
    }
  });
}
