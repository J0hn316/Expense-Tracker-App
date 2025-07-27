import { useState } from 'react';

type ExpenseFiltersProps = {
  categories: string[];
  years: string[];
  onFilterChange: (filters: {
    category: string;
    month: string;
    year: string;
  }) => void;
};

export default function ExpenseFilters({
  categories,
  years,
  onFilterChange,
}: ExpenseFiltersProps) {
  const [category, setCategory] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleClearFilters = () => {
    setCategory('');
    setMonth('');
    setYear('');
    onFilterChange({ category: '', month: '', year: '' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded shadow mt-4">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => {
          const newCategory = e.target.value;
          setCategory(newCategory);
          onFilterChange({
            category: newCategory,
            month,
            year,
          });
        }}
        className="border px-3 py-2 rounded w-full sm:w-auto"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Month Filter */}
      <select
        value={month}
        onChange={(e) => {
          const newMonth = e.target.value;
          setMonth(newMonth);
          onFilterChange({
            category,
            month: newMonth,
            year,
          });
        }}
        className="border px-3 py-2 rounded w-full sm:w-auto"
      >
        <option value="">Months</option>
        {Array.from({ length: 12 }, (_, i) => {
          const monthValue = (i + 1).toString().padStart(2, '0');
          return (
            <option key={monthValue} value={monthValue}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          );
        })}
      </select>

      {/* Year Filter */}
      <select
        value={year}
        onChange={(e) => {
          const newYear = e.target.value;
          setYear(newYear);
          onFilterChange({
            category,
            month,
            year: newYear,
          });
        }}
        className="border px-3 py-2 rounded w-full sm:w-auto"
      >
        <option value="">Years</option>
        {years.map((yearVal) => (
          <option key={yearVal} value={yearVal}>
            {yearVal}
          </option>
        ))}
      </select>
      {/* Clear Filters Button */}
      <button
        onClick={handleClearFilters}
        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded w-full sm:w-auto"
      >
        Clear Filters
      </button>
    </div>
  );
}
