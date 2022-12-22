export const AUTHORIZATION =
  'Payaza UFo3OC1QS0xJVkUtOTk1OEYzQkUtQUVBQy00QjYxLTg4OTMtMDlBNjA3OUY0Njgw';
export const AUTHORIZATION_2 =
  'Payaza UFo3OC1QS0xJVkUtRjdGNDQ3MTAtMTU4Qi00Q0Q5LUFGNDMtOTEzNDA0NDc4MzE0';
export const REQUEST_URL =
  'https://router-live.78financials.com/api/request/secure/payloadhandler';
export const SERVICE_PAYLOAD = {
  request_channel: 'MOBILE_APP',
  request_channel_type: 'ANDROID',
  device_id: '123456789011-00-22',
  device_name: 'TECHNO 38',
  device_os: 'Android 67',
  request_application: 'Payaza',
  application_module: 'USER_MODULE',
  application_version: '1.0.0',
  connection_mode: 'Live',
};
export const TRANSACTION_PIN = 1234;
export const ENDPOINTS = {
  transfer: 'PayoutFromPayazaAccountRequest',
  accountDetail: 'FetchPayazaAccountRequest',
  transactionDetails: 'FetchPayoutTransactionsRequest',
  accountNameEnquiry: 'AccountNameEnquiryMerchant',
};
export const ROUTES = [
  {
    label: 'Dashboard',
    pathname: '/dashboard',
  },
  {
    label: 'Transfers',
    pathname: '/transfers',
  },
  {
    label: 'Payments',
    pathname: '/payments',
  },
];

export const DUMMY_MERCHANTS = [
  'Ebeano Supermarket',
  'Shoprite',
  'Game',
  'The Pause Cafe',
  'FlowerShop',
  ''
]
