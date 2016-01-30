var AWS = require('aws-sdk');
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId: "DummyKeyForLocalDynamoDB",
  secretAccessKey: "DummySecretAccessKeyForLocalDynamoDB"
});

module.exports = new AWS.DynamoDB();
