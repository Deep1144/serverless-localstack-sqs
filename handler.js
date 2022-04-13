'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.sendMessage = async (event) => {
  const AWS = require("aws-sdk");
  const SQS = new AWS.SQS({
    accessKeyId: "local",
    secretAccessKey: "local",
    endpoint: "127.0.0.1:4566"
  });

  try {

    const queueParams = {
      Entries: [
        {
          Id: "1",
          MessageBody: "this is a message body",
        }
      ],
      QueueUrl: 'http://localhost:4566/000000000000/sqsOfflineQueue'
    }

    const result = await SQS.sendMessageBatch(queueParams).promise();
    // console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e);
  }
};

module.exports.receiveMessage = async (event) => {
  console.log('receiveMessage', JSON.stringify(event.Records, null, 2));
};
