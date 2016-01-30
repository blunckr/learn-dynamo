'use strict';

var dynamodb = require('dynamodb');


dynamodb.listTables({}, function(err, data) {
  if (err) {
    console.log("Unable to query. Error:" + JSON.stringify(err, null, 2));
  } else {
    console.log("Tables " + data.TableNames);
  }
});
