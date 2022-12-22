import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import PageWrapper from '../components/PageWrapper';
import useFetch from '../hooks/useFetch';
import { ENDPOINTS, TRANSACTION_PIN } from '../utils/constants';
import { Oval } from 'react-loader-spinner';

const Transfers = () => {
  const navigate = useNavigate();
  const [banks, setBanks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [recipientInfo, setRecipientInfo] = useState({
    credit_amount: 0,
    account_number: '9994845772',
    account_name: 'PAYAZA(Eagleswitch Technologi)',
    bank_code: '000013',
  });
  // const [narration, setNarration] = useState('');

  const {
    makeRequest: transferToBaller,
    isSuccess: offlineTransferSuccess,
    isLoading: offlineTransferLoading,
  } = useFetch();
  // const {
  //   makeRequest: verifyAccountName,
  //   data: accountName,
  //   isLoading: accountNameLoading,
  // } = useFetch();

  // const modifyRecipientInfo = ({ target: { name, value } }) => {
  //   setRecipientInfo(info => ({
  //     ...info,
  //     [name]: value,
  //   }));
  // };

  const modifyAmount = event => {
    setShowForm(true)
    setRecipientInfo(info => ({
      ...info,
      credit_amount: event.target.value,
    }));
    initiateTransfer(event.target.value);
  };

  // const modifyNarration = ({ target: { value } }) => {
  //   setNarration(value);
  // };

  const initiateTransfer = e => {
    e.preventDefault();
    const config = {
      request_class: ENDPOINTS.transfer,
      payout_amount: recipientInfo.credit_amount,
      transaction_pin: TRANSACTION_PIN,
      narration: 'send funds to offline account',
      payout_beneficiaries: [recipientInfo],
    };
    transferToBaller(config);
  };

  useEffect(() => {
    offlineTransferSuccess && navigate('/dashboard');
  }, [offlineTransferSuccess, navigate]);

  useEffect(() => {
    fetch('https://nigerianbanks.xyz/')
      .then(response => response.json())
      .then(data => setBanks(data));
  }, []);

  return (
    <>
      {offlineTransferLoading ? (
        <div
          className="w-full flex justify-center items-center bg-[#00000010] fixed top-0 left-0"
          style={{ height: '100vh' }}
        >
          <Oval
            height="80"
            width="80"
            radius="9"
            color="#6366f1"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <PageWrapper>
          <div className="flex flex-col gap-12 h-full overflow-auto">
            <h3 className="text-indigo-700 text-2xl font-bold pt-4">
              Transfers
            </h3>
            <h3 className="text-indigo-700 pt-4">
              Transfer funds from your Online baller account
              <br />
              to your offline account or to a fellow baller like you 🙂
            </h3>
            <div className="flex gap-8 text-indigo-700">
              <ActivityCard
                label="Fund Offline Account"
                extraInfo="save offline funds for emergency transactions"
                onClick={modifyAmount}
                isLink={true}
              />
              <ActivityCard
                label="B2B Transfer"
                extraInfo="send funds to your fellow baller"
                isOffline={true}
              />
            </div>
            {showForm && (
              <form
                onSubmit={initiateTransfer}
                className="flex flex-col gap-8 w-96 text-indigo-500"
              >
                <label className="flex flex-col gap-2">
                  How much (in ₦) will you like to move offline?
                  <input
                    value={recipientInfo.credit_amount}
                    onChange={modifyAmount}
                    className="px-2 py-4 rounded-md border border-indigo-100"
                    type="number"
                  />
                </label>
                <button className="rounded-md bg-indigo-700 text-white p-3 w-fit">
                  Move Funds
                </button>
              </form>
            )}
          </div>
        </PageWrapper>
      )}
    </>
  );
};

export default Transfers;
