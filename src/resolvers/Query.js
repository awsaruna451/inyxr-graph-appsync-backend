const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const getComments = async () => {
  const params = {
    TableName: process.env.COMMENTS_TABLE,
  };
  const data = await docClient.scan(params).promise();
  return data.Items;
};

const getReplies = async () => {
  const params = {
    TableName: process.env.REPLIES_TABLE,
  };
  const data = await docClient.scan(params).promise();
  return data.Items;
};

const getCommentsByIdeaId = async (args) => {
  const params = {
    TableName: process.env.COMMENTS_TABLE,
    IndexName: 'IdeaIdIndex',
    KeyConditionExpression: 'ideaId = :ideaId',
    ExpressionAttributeValues: {
      ':ideaId': args.ideaId,
    },
  };
  const data = await docClient.query(params).promise();
  return data.Items;
};

module.exports = {
  getComments,
  getReplies,
  getCommentsByIdeaId,
};