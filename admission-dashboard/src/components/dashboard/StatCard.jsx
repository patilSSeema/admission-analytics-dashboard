const StatCard = ({ title, value }) => {
  let valueColor = "text-green-600";

  if (value > 1000) {
    valueColor = "text-red-600";
  } else if (value > 500) {
    valueColor = "text-orange-500";
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-5 hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-bold mt-2 ${valueColor}`}>
        {value}
      </p>
    </div>
  );
};

export default StatCard;
