const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createComment = async (args) => {
  const params = {
    TableName: process.env.COMMENTS_TABLE,
    Item: args.input,
  };
  await docClient.put(params).promise();
  return args.input;
};

const createReply = async (args) => {
  const params = {
    TableName: process.env.REPLIES_TABLE,
    Item: args.input,
  };
  await docClient.put(params).promise();
  return args.input;
};

module.exports = {
  createComment,
  createReply,
};