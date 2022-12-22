import PageWrapper from '../components/PageWrapper';
import Barcode from 'react-barcode';
import { useState } from 'react';
import { DUMMY_MERCHANTS } from '../utils/constants';

const Payments = () => {
  const [transactionDetails, setTransactionDetails] = useState({
    amount: '',
    narration: '',
    merchant: '',
  });
  const [stringifiedData, setStringifiedData] = useState('');
  const [renderBarcode, setRenderBarcode] = useState(false);

  const modifyTransactionDetails = ({ target: { name, value } }) => {
    setTransactionDetails(data => ({
      ...data,
      [name]: value,
    }));
  };
  const generateBarcode = event => {
    event.preventDefault();
    setStringifiedData(JSON.stringify(transactionDetails));
    setRenderBarcode(true);
  };

  const generateAnother = () => {
    setTransactionDetails({
      amount: '',
      narration: '',
      merchant: '',
    })
    setRenderBarcode(false)
  }

  return (
    <PageWrapper>
      <div className="flex flex-col gap-6 mt-10 h-full">
        <div className="rounded-md bg-white shadow-lg border border-indigo-50 px-4 py-6 text-indigo-700">
          {renderBarcode ? (
            <div className="max-w-sm flex flex-col gap-8">
              <Barcode
                value={stringifiedData}
                width={1}
              />
              <button className="bg-indigo-700 text-white p-4 rounded-md w-fit" onClick={generateAnother}>
                Generate another
              </button>
            </div>
          ) : (
            <>
              <h3 className="pb-4 text-lg font-semibold">Offline Payment</h3>
              <form
                className="flex flex-col gap-4 max-w-lg"
                onSubmit={generateBarcode}
              >
                <label
                  htmlFor="bank_code"
                  className="flex flex-col gap-2"
                >
                  Merchant Name
                  <select
                    className="w-full py-2 px-4 border border-indigo-50 rounded-md"
                    name="merchant"
                    value={transactionDetails.merchant}
                    onChange={modifyTransactionDetails}
                  >
                    <option value="">-- Select a Merchant --</option>
                    {DUMMY_MERCHANTS?.map(merchant => (
                      <option
                        key={merchant}
                        value={merchant}
                      >
                        {merchant}
                      </option>
                    ))}
                  </select>
                </label>
                <label
                  htmlFor="amount"
                  className="flex flex-col gap-2"
                >
                  Amount
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={transactionDetails.amount}
                    onChange={modifyTransactionDetails}
                    className="w-full py-2 px-4 border border-indigo-50 rounded-md"
                  />
                </label>
                <label
                  htmlFor="narration"
                  className="flex flex-col gap-2"
                >
                  Account Name
                  <textarea
                    type="text"
                    id="narration"
                    name="narration"
                    value={transactionDetails.narration}
                    onChange={modifyTransactionDetails}
                    className="w-full py-2 px-4 border border-indigo-50 rounded-md cursor-not-allowed"
                  />
                </label>
                <button className="bg-indigo-700 text-white p-4 rounded-md">
                  Generate Barcode
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Payments;
