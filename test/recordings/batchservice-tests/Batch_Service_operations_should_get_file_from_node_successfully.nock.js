// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(200, "hello \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Tue, 21 Aug 2018 20:30:11 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e09cb7e8-8ca2-4d38-9c32-c80c18543751',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Tue, 21 Aug 2018 20:30:11 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Flchency4.westcentralus.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-14141481_2-20180821t200555z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Tue, 21 Aug 2018 20:30:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(200, "hello \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Tue, 21 Aug 2018 20:30:11 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e09cb7e8-8ca2-4d38-9c32-c80c18543751',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Tue, 21 Aug 2018 20:30:11 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Flchency4.westcentralus.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-14141481_2-20180821t200555z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Tue, 21 Aug 2018 20:30:58 GMT',
  connection: 'close' });
 return result; }]];