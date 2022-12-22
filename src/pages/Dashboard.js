import { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import ActivityCard from '../components/ActivityCard';
import PageWrapper from '../components/PageWrapper';
import { ENDPOINTS, TRANSACTION_STATUS } from '../utils/constants';
import useFetch from '../hooks/useFetch';
import { formatDate } from '../utils/helpers';
import format from 'format-number';

const Dashboard = () => {
  const {
    makeRequest: getAllTransactions,
    data: transactions,
    isLoading: transactionsLoading,
  } = useFetch();
  const {
    makeRequest: getAccountInfo,
    data: accountInfo,
    isLoading: accountInfoLoading,
  } = useFetch();
  const {
    makeRequest2: getSecondAccountInfo,
    data: secondAccountInfo,
    isLoading: secondAccountInfoLoading,
  } = useFetch();

  const [transactionsHistory, setTransactionsHistory] = useState([]);
  const [accountInformation, setAccountInformation] = useState('');
  const [secondAccountInformation, setSecondAccountInformation] = useState('');
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);

  window.addEventListener('online', () => {
    setIsOnline(true);
  });

  window.addEventListener('offline', () => {
    setIsOnline(false);
  });

  useEffect(() => {
    getAllTransactions({
      request_class: ENDPOINTS.transactionDetails,
    });
    getAccountInfo({
      request_class: ENDPOINTS.accountDetail,
    });
    getSecondAccountInfo({
      request_class: ENDPOINTS.accountDetail,
    });
  }, []);

  useEffect(() => {
    transactions &&
      setTransactionsHistory(
        transactions?.response_content?.response_content?.records
      );
  }, [transactions]);

  useEffect(() => {
    accountInfo &&
      setAccountInformation(accountInfo?.response_content?.account_balance);
  }, [accountInfo]);

  useEffect(() => {
    secondAccountInfo &&
      setSecondAccountInformation(
        secondAccountInfo?.response_content?.account_balance
      );
  }, [secondAccountInfo]);

  const toggleStatus = () => setIsOnline(state => !state);

  return (
    <PageWrapper>
      <div className="flex flex-col gap-12 h-full">
        <div className="flex justify-between items-start pt-4">
          <h3 className="text-indigo-700 text-2xl font-bold">Dashboard</h3>
          <div className="flex flex-col gap-2 self-end w-fit text-center text-indigo-700 font-bold text-sm">
            STATUS
            <div className="flex gap-2 font-bold text-indigo-700">
              offline
              <ReactSwitch
                checked={isOnline}
                disabled={transactionsLoading}
                onChange={toggleStatus}
                onColor="#E6EEF1"
                onHandleColor="#6366F1"
                handleDiameter={25}
                uncheckedIcon={true}
                checkedIcon={true}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
              />
              online
            </div>
          </div>
        </div>
        <div className="flex gap-8 text-indigo-700">
          <ActivityCard
            label="Baller Balance"
            extraInfo={
              !accountInfoLoading
                ? format({ prefix: '₦ ' })(accountInformation)
                : '...loading'
            }
            isOffline={!isOnline}
            isCash={true}
          />
          <ActivityCard
            label="Offline Balance"
            extraInfo={
              !secondAccountInfoLoading
                ? format({ prefix: '₦ ' })(secondAccountInformation)
                : '...loading'
            }
            isOffline={isOnline}
            isCash={true}
          />
          <ActivityCard
            label="Available Offline Transactions"
            extraInfo="5"
            isOffline={isOnline}
            isCash={true}
          />
        </div>
        <div className="flex flex-col gap-6 mt-10 h-full">
          <h3 className="text-indigo-700 font-bold text-xl">
            Transactions History
          </h3>
          <div className="w-full h-full">
            <table className="w-full flex flex-col gap-2">
              <thead>
                <tr className="flex gap-2 py-3 font-semibold px-1">
                  <td className="w-64 text-indigo-700 text-sm">Account name</td>
                  <td className="w-44 text-indigo-700 text-sm">
                    Account number
                  </td>
                  <td className="w-28 text-indigo-700 text-sm">Amount</td>
                  <td className="w-28 text-indigo-700 text-sm">Date</td>
                  <td className="w-28 text-indigo-700 text-sm">Status</td>
                  <td className="w-52 text-indigo-700 text-sm">
                    Transaction Reference
                  </td>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-2">
                {transactionsHistory?.map(item => (
                  <tr
                    key={item?.transaction_reference}
                    className="flex gap-2 py-2 px-1"
                  >
                    <td className="w-64 text-indigo-700 text-sm">
                      {item?.account_name}
                    </td>
                    <td className="w-44 text-indigo-700 text-sm">
                      {item?.credit_account}
                    </td>
                    <td className="w-28 text-indigo-700 text-sm">
                      {format({ prefix: '₦ ' })(item?.transaction_amount)}
                    </td>
                    <td className="w-28 text-indigo-700 text-sm">
                      {formatDate(item?.transactionDate)}
                    </td>
                    <td className="w-28 text-indigo-700 text-sm">
                      {item?.transaction_status === 'NIP_SUCCESS'
                        ? 'Successful'
                        : item?.transaction_status === 'NIP_PENDING'
                        ? 'Pending'
                        : 'Failed'}
                    </td>
                    <td className="w-52 text-pink-500 text-sm">
                      {item?.transaction_reference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
