import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import useFetch from './hooks/useFetch';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
