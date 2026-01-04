import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProgramBarChart = ({ data }) => {
  if (!data || !data.applicationsPerProgram) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-gray-700 font-medium mb-2">Applications per Program</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data.applicationsPerProgram} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <XAxis dataKey="program" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgramBarChart;
