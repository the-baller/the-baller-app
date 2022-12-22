import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import PageWrapper from '../components/PageWrapper';
import useFetch from '../hooks/useFetch';
import { ENDPOINTS, TRANSACTION_PIN } from '../utils/constants';

const Transfers = () => {
  const navigate = useNavigate();
  const [banks, setBanks] = useState([]);
  const [recipientInfo, setRecipientInfo] = useState({
    credit_amount: 0,
    account_number: '9994845772',
    account_name: 'PAYAZA(Eagleswitch Technologi)',
    bank_code: '000013',
  });
  // const [narration, setNarration] = useState('');

  const { makeRequest: transferToBaller, isSuccess: offlineTransferSuccess } =
    useFetch();
  // const {
  //   makeRequest: verifyAccountName,
  //   data: accountName,
  //   isLoading: accountNameLoading,
  // } = useFetch();

  const modifyRecipientInfo = ({ target: { name, value } }) => {
    setRecipientInfo(info => ({
      ...info,
      [name]: value,
    }));
  };

  const modifyAmount = () => {
    const credit_amount = prompt("enter the amount you'll like to move");
		console.log(credit_amount);
    setRecipientInfo(info => ({
			...info,
      credit_amount,
    }));
		console.log(credit_amount);
    initiateTransfer(credit_amount);
		console.log(credit_amount);
  };
	
  // const modifyNarration = ({ target: { value } }) => {
		//   setNarration(value);
		// };
		
		const initiateTransfer = (credit_amount) => {
		console.log({credit_amount});
    const config = {
      request_class: ENDPOINTS.transfer,
      payout_amount: credit_amount,
      transaction_pin: TRANSACTION_PIN,
      narration: 'send funds to offline account',
      payout_beneficiaries: [recipientInfo],
    };
		console.log(config);
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
    <PageWrapper>
      <div className="flex flex-col gap-12 h-full overflow-auto">
        <h3 className="text-indigo-700 text-2xl font-bold pt-4">Transfers</h3>
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
          />
          <ActivityCard
            label="B2B Transfer"
            extraInfo="send funds to your fellow baller"
            isOffline={true}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Transfers;
