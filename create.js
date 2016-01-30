var dynamodb = require('dynamodb');

var table = {
  AttributeDefinitions: [ // Defining Primary Key
    {
      AttributeName: 'order_id',
      AttributeType: 'N'
    }
    // Define Secondary key here.
  ],
  KeySchema: [ // Defining Key Type Here.
    {
      AttributeName: 'order_id',
      KeyType: 'HASH'
    }
    // Define Secondary Key Type Here.
  ],
  // Define read per second and write per second here.
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 5
  },
  TableName: 'sample_table' // table Name
};

dynamodb.createTable(table, function (error, data) {
  if (error) {
    console.log("Error: ", error, error.stack);
    callback(error);
  } else {
    console.log("Table Created!");
    callback(null);
  }
});
