import arrowRight from '../img/arrow-right.svg';

const ActivityCard = ({ label, extraInfo, isOffline, isLink, isCash, onClick }) => {
  return (
    <div
      className={`w-80 rounded-lg shadow-md h-36 p-4 flex flex-col justify-between border border-indigo-50 ${
        isOffline ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
      }`}
			onClick={onClick}
    >
      <h3 className="font-semibold text-lg">{label}</h3>
      <p className={`flex justify-between ${isCash ? 'text-3xl' : ''}`}>
        {extraInfo}{' '}
        {isLink && (
          <img
            src={arrowRight}
            alt=""
          />
        )}
      </p>
    </div>
  );
};

export default ActivityCard;
