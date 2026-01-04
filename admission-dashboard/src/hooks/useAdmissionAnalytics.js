import { useState, useEffect, useCallback } from "react";
import { fetchAdmissionAnalytics } from "../api/analytics";

const useAdmissionAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // UI input filters
  const [filters, setFilters] = useState({
    from: "",
    to: "",
  });

  // Applied filters used for API
  const [appliedFilters, setAppliedFilters] = useState({
    from: "",
    to: "",
  });

  // Function to fetch data
  const loadData = useCallback(async (filterParams = appliedFilters) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchAdmissionAnalytics(filterParams);
      setData(res);
    } catch {
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  }, [appliedFilters]);

  // Initial load & whenever applied filters change
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Update UI filter inputs
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Apply UI filters to API
  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  // ✅ Refresh like browser refresh
  const refresh = async () => {
    // Reset filters
    setFilters({ from: "", to: "" });
    setAppliedFilters({ from: "", to: "" });

    // Fetch fresh data ignoring previous filters
    await loadData({ from: "", to: "" });
  };

  return {
    data,
    loading,
    error,
    filters,
    updateFilter,
    applyFilters,
    refresh,
  };
};

export default useAdmissionAnalytics;
