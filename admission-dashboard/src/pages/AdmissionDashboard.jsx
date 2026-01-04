import useAdmissionAnalytics from "../hooks/useAdmissionAnalytics";
import Loader from "../components/common/Loader";
import StatCard from "../components/dashboard/StatCard";
import ProgramBarChart from "../components/dashboard/ProgramBarChart";
import TrendLineChart from "../components/dashboard/TrendLineChart";

const AdmissionDashboard = () => {
  const { data, loading, error, refresh } = useAdmissionAnalytics();

  if (loading) return <Loader />;

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  if (!data) {
    return <div className="p-4 text-gray-500">No data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
        <h1 className="text-xl md:text-2xl font-semibold">
          Admission Analytics Dashboard
        </h1>

        <button
          onClick={refresh}
          className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded"
        >
          Refresh
        </button>
      </div>

      {/* Placeholder for cards & charts */}
      <div className="text-gray-400">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Applicants" value={data.totalApplicants} />
          <StatCard
            title="Verified Applicants"
            value={data.verifiedApplicants}
          />
          <StatCard
            title="Rejected Applicants"
            value={data.rejectedApplicants}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProgramBarChart data={data} />
        <TrendLineChart data={data} />
      </div>
      </div>
    </div>
  );
};

export default AdmissionDashboard;
