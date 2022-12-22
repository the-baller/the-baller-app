import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Payments from './pages/Payments';
import SignIn from './pages/SignIn';
import Transfers from './pages/Transfers';

const App = () => {
  const { makeRequest } = useFetch();

  const callEndpoint = () => {
    const body = {
      request_class: 'FetchPayazaAccountRequest',
    };

    makeRequest(body);
  };

  useEffect(() => {
    callEndpoint();
  }, []);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/sign-in"
          element={<SignIn />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/transfers"
          element={<Transfers />}
        />
        <Route
          path="/payments"
          element={<Payments />}
        />
      </Routes>
    </>
  );
};

export default App;
