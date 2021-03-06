// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-08-01.7.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:14df0f7d-179f-488c-942f-9ec1b6d12e5c\\nTime:2018-08-21T20:16:22.7758842Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"virtualMachineImageId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Compute/images/FakeImage\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified virtualMachineImageId is in a different subscription and cannot be used with the current Batch account in subscription 3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05\"\r\n    }\r\n  ]\r\n}", { 'content-length': '852',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '14df0f7d-179f-488c-942f-9ec1b6d12e5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:16:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-08-01.7.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:14df0f7d-179f-488c-942f-9ec1b6d12e5c\\nTime:2018-08-21T20:16:22.7758842Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"virtualMachineImageId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Compute/images/FakeImage\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified virtualMachineImageId is in a different subscription and cannot be used with the current Batch account in subscription 3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05\"\r\n    }\r\n  ]\r\n}", { 'content-length': '852',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '14df0f7d-179f-488c-942f-9ec1b6d12e5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:16:22 GMT',
  connection: 'close' });
 return result; }]];