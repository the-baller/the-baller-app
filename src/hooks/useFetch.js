import { useState } from 'react';
import {
  AUTHORIZATION,
  CONSTANT_CONFIG_BODY_DATA,
  REQUEST_URL,
} from '../constants';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeRequest = extraConfigBodyData => {
    setIsLoading(true);
    fetch(REQUEST_URL, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTHORIZATION,
      },
      body: JSON.stringify({
        service_type: 'Account',
        service_payload: {
          ...CONSTANT_CONFIG_BODY_DATA,
          ...extraConfigBodyData,
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        setIsSuccess(true);
        setIsError(false);
        setIsLoading(false);
        setData(data);
      })
      .catch(error => {
        setIsSuccess(false);
        setIsError(true);
        setIsLoading(false);
        setErrorResponse(error);
      });
  };

  return {
    data,
    makeRequest,
    isLoading,
    isError,
    isSuccess,
    errorResponse,
  };
};

export default useFetch;
