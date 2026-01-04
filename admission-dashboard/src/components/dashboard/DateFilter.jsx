const DateFilter = ({ from, to, onChange, onApply }) => {
  const isInvalidRange = from && to && from > to;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 sm:items-end">
      
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">From</label>
        <input
          type="date"
          value={from}
          onChange={(e) => onChange("from", e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">To</label>
        <input
          type="date"
          value={to}
          onChange={(e) => onChange("to", e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={onApply}
          disabled={isInvalidRange}
          className={`px-4 py-2 rounded text-sm transition
            ${
              isInvalidRange
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }
          `}
        >
          Apply Filter
        </button>

      <button
          type="button"
          onClick={() => {
            onChange("from", "");
            onChange("to", "");
          }}
          className="px-4 py-2 border rounded text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Reset
        </button>
      </div>

      {isInvalidRange && (
        <p className="text-xs text-red-500 mt-1">
          From date cannot be greater than To date
        </p>
      )}
    </div>
  );
};

export default DateFilter;
