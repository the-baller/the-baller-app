import { useEffect } from 'react';
import useFetch from './hooks/useFetch';

const App = () => {
  const { makeRequest, data } = useFetch();

  const callEndpoint = () => {
    const body = {
      request_class: 'FetchPayazaAccountBeneficiaryRequest',
    };
    // const body = {
    //   request_class: 'AccountNameEnquiryMerchant',
    //   bank_code: '000013',
    //   account_number: '0149378999',
    // };

    makeRequest(body);
  };

  useEffect(() => {
    callEndpoint();
  }, []);

  useEffect(() => {
    data && console.log(data);
  }, [data]);

  return <></>;
};

export default App;
