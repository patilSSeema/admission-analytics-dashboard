import StatCard from "../components/dashboard/StatCard";
import ProgramBarChart from "../components/dashboard/ProgramBarChart";
import TrendLineChart from "../components/dashboard/TrendLineChart";
import DateFilter from "../components/dashboard/DateFilter";
import useAdmissionAnalytics from "../hooks/useAdmissionAnalytics";
import Loader from "../components/common/Loader";

const AdmissionDashboard = () => {
  const { data, loading, error, filters, updateFilter, applyFilters, refresh } =
    useAdmissionAnalytics();

  if (loading) return <Loader />;
  if (error)
    return <div className="p-4 text-red-600 text-center">{error}</div>;
  if (!data) return null;

  // ✅ No-data condition
  const hasNoData =
  data.totalApplicants === 0 ||
  !data.applicationsPerProgram?.length ||
  !data.applicationTrends?.length;


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Admission Analytics
            </h1>
            <p className="text-sm text-gray-500">
              Overview of applicant statistics and trends
            </p>
          </div>

          <button
            onClick={refresh}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition w-full md:w-auto"
          >
            Refresh Data
          </button>
        </div>
      </div>

      {/* Date Filter */}
      <div className="mb-6">
        <DateFilter
          from={filters.from}
          to={filters.to}
          onChange={updateFilter}
          onApply={applyFilters}
        />
      </div>

      {/* ✅ No Data Fallback UI */}
      {hasNoData ? (
        <div className="bg-white border rounded-lg p-8 text-center text-gray-500">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            No Admission Data Available
          </h3>
          <p className="text-sm">
            Try adjusting the date range or refresh the data.
          </p>
        </div>
      ) : (
        <>
          {/* Stat Cards */}
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

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProgramBarChart data={data} />
            <TrendLineChart data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default AdmissionDashboard;
