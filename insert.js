var dynamodb = require('./dynamodb');

var params = {
  Item: {
    order_id: {
      N: '1234'
    },
    order_body: {
      S: "Some data"
    }
  },
  TableName: 'sample_table'
};

dynamodb.putItem(params, function (error, data) {
  if (error) {
    console.log("Error: ", error, error.stack);
  } else {
    console.log("Row ", JSON.stringify(params), " Inserted!");
  }
});
