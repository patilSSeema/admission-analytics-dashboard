import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TrendLineChart = ({ data }) => {
  if (!data || !data.applicationTrends) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-gray-700 font-medium mb-2">Application Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data.applicationTrends} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendLineChart;
