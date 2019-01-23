# Azlo-Node

A Node.js API wrapper for Azlo Bank. [Azlo](https://azlo.com) is a completely online business bank account backed by BBVA Compass.

### Prequistes
* Install the Azlo-Node npm library.
```
npm i --save azlo-node
```

## Usage
The package needs to be configured with your API key which can be found on the Azlo website.

```js

const azlo = require('azlo-node')('YOUR_API_KEY');
const accounts = await azlo.accounts.list({
  unmask: true // Will show the full account number
});

```

* See the [Examples](https://github.com/jaireddjawed/Azlo-Node/blob/master/examples.js) to list accounts & transactions

### Built With
* [Request](https://www.npmjs.com/package/request) - Library used to make http calls
