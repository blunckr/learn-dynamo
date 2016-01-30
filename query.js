// this does not work

var dynamodb = require('./dynamodb');
var params = {
  TableName : "samp'e_table",
  KeyConditionExpression: "#yr = :yyyy",
  ExpressionAttributeNames:{
    "#yr": "year"
  },
  ExpressionAttributeValues: {
    ":yyyy":1985
  }
};

dynamodb.query(params, function(err, data) {
  if (err) {
    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
  } else {
    console.log("Query succeeded.");
    data.Items.forEach(function(item) {
      console.log(" -", item.year + ": " + item.title);
    });
  }
});
