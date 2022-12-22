import { useState } from 'react';
import {
  AUTHORIZATION,
  AUTHORIZATION_2,
  REQUEST_URL,
	SERVICE_PAYLOAD,
} from '../utils/constants';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeRequest = (extraServicePayloadData, authorization) => {
    setIsLoading(true);
    fetch(REQUEST_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTHORIZATION,
      },
      body: JSON.stringify({
        service_type: 'Account',
        service_payload: {
          ...SERVICE_PAYLOAD,
          ...extraServicePayloadData,
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
  const makeRequest2 = (extraServicePayloadData) => {
    setIsLoading(true);
    fetch(REQUEST_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTHORIZATION_2,
      },
      body: JSON.stringify({
        service_type: 'Account',
        service_payload: {
          ...SERVICE_PAYLOAD,
          ...extraServicePayloadData,
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
    makeRequest2,
    isLoading,
    isError,
    isSuccess,
    errorResponse,
  };
};

export default useFetch;
