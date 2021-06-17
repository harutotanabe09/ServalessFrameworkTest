'use strict';
const pow = require('pow');
const moment = require('moment');

module.exports.call = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless !! Your function executed successfully!' + pow(23)  + moment().format(),
        input: event,
      },
      null,
      2
    ),
  };
};
