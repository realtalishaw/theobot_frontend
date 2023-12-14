/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_THEOBOT_CHATTABLE_ARN
	API_THEOBOT_CHATTABLE_NAME
	API_THEOBOT_EVENTTABLE_ARN
	API_THEOBOT_EVENTTABLE_NAME
	API_THEOBOT_FILETABLE_ARN
	API_THEOBOT_FILETABLE_NAME
	API_THEOBOT_GRAPHQLAPIENDPOINTOUTPUT
	API_THEOBOT_GRAPHQLAPIIDOUTPUT
	API_THEOBOT_GRAPHQLAPIKEYOUTPUT
	API_THEOBOT_LOCATIONTABLE_ARN
	API_THEOBOT_LOCATIONTABLE_NAME
	API_THEOBOT_MOONTABLE_ARN
	API_THEOBOT_MOONTABLE_NAME
	API_THEOBOT_PLANETTABLE_ARN
	API_THEOBOT_PLANETTABLE_NAME
	API_THEOBOT_PROJECTROLETABLE_ARN
	API_THEOBOT_PROJECTROLETABLE_NAME
	API_THEOBOT_PROJECTTABLE_ARN
	API_THEOBOT_PROJECTTABLE_NAME
	API_THEOBOT_SATELLITETABLE_ARN
	API_THEOBOT_SATELLITETABLE_NAME
	API_THEOBOT_TASKTABLE_ARN
	API_THEOBOT_TASKTABLE_NAME
	API_THEOBOT_USERTABLE_ARN
	API_THEOBOT_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const axios = require('axios');
const queries = require('./graphql/queries')
const mutations = require('./graphql/mutations')
const subscriptions = require('./graphql/subscriptions')

// AWS Amplify GraphQL endpoint and API key
const graphqlEndpoint = process.env.API_THEOBOT_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_THEOBOT_GRAPHQLAPIKEYOUTPUT;

// GraphQL queries and mutations
const listUsers = queries.listUsers
const createUser = mutations.createUser
const getUser = queries.getUser

/**
 * Makes a GraphQL request using the specified query and variables.
 * @param {string} query - The GraphQL query.
 * @param {object} variables - The variables to be passed to the query (default: {}).
 * @returns {Promise<object>} - A promise that resolves to the response data.
 * @throws {Error} - If there are GraphQL errors or if an error occurs during the request.
 */
async function makeGraphqlRequest(query, variables = {}) {
	try {
	  const response = await axios({
		url: graphqlEndpoint,
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  'x-api-key': apiKey,
		},
		data: {
		  query,
		  variables,
		},
	  });
  
	  // Check for GraphQL errors in the response
	  if (response.data.errors) {
		console.error("GraphQL Errors:", response.data.errors);
		throw new Error('GraphQL Error');
	  }
  
	  return response.data.data;
	} catch (error) {
	  // Log and rethrow the error
	  console.error("Request Error:", error);
	  throw error;
	}
  }
  
// Declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// GET method for fetching all users
app.get('/users', async function(req, res) {
  try {
    const usersData = await makeGraphqlRequest(listUsers);
    res.json({ success: true, users: usersData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST method for creating a new user
app.post('/users', async function(req, res) {
  try {
    const newUser = req.body;
    const createdUser = await makeGraphqlRequest(createUser, { input: newUser });
    res.json({ success: true, user: createdUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.js
app.get('/users/:id', async function(req, res) {
	const userId = req.params.id; // Extract the user ID from the request parameters
  
	try {
	  const userData = await makeGraphqlRequest(getUser, { id: userId });
	  // You may need to adjust this according to the actual response shape
	  res.json({ success: true, user: userData.getUser });
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  });
  

// Start the server on port 3000 (modify as needed)
app.listen(3000, function() {
  console.log("App started on port 3000");
});

// Export the app object for AWS Lambda
module.exports = app;
