const mockData = {
  totalApplicants: 1250,
  verifiedApplicants: 820,
  rejectedApplicants: 210,

  applicationsPerProgram: [
    { program: "B.Tech", count: 540 },
    { program: "MBA", count: 320 },
    { program: "BCA", count: 210 },
    { program: "MCA", count: 180 },
  ],

  applicationTrends: [
    { date: "2025-01-01", count: 120 },
    { date: "2025-01-02", count: 180 },
    { date: "2025-01-03", count: 150 },
    { date: "2025-01-04", count: 220 },
    { date: "2025-01-05", count: 300 },
  ],
};

// mock api call
export const fetchAdmissionAnalytics = ({ from, to } = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let trends = mockData.applicationTrends;

      if (from && to) {
        trends = trends.filter(
          (item) => item.date >= from && item.date <= to
        );
      }

      resolve({
        ...mockData,
        applicationTrends: trends,
      });
    }, 600);
  });
};
