import { useEffect, useState, useCallback } from "react";
import { fetchAdmissionAnalytics } from "../api/analytics";

const useAdmissionAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    from: "",
    to: "",
  });

  const loadAnalytics = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchAdmissionAnalytics(filters);
      setData(response);
    } catch (err) {
      setError("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  return {
    data,
    loading,
    error,
    filters,
    setFilters,
    refresh: loadAnalytics,
  };
};

export default useAdmissionAnalytics;
