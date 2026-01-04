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

  // ✅ applied filters (used for API)
  const [appliedFilters, setAppliedFilters] = useState({
    from: "",
    to: "",
  });

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchAdmissionAnalytics(appliedFilters);
      setData(res);
    } catch {
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  }, [appliedFilters]);

  // 🔥 Only runs when applied filters change
  useEffect(() => {
    loadData();
  }, [loadData]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  return {
    data,
    loading,
    error,
    filters,
    updateFilter,
    applyFilters,
    refresh: loadData,
  };
};

export default useAdmissionAnalytics;
