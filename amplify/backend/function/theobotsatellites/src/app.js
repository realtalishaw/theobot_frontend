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

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/satellites', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/satellites/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/satellites', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/satellites/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/satellites', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/satellites/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/satellites', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/satellites/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
