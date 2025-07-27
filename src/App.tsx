import { useState, useMemo } from 'react';
import useExpenses from './hooks/useExpenses';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseFilters from './components/ExpenseFilters';

export default function App() {
  const { expenses, addExpense, deleteExpense } = useExpenses();
  const [filters, setFilters] = useState({ category: '', month: '', year: '' });

  console.log('All Expenses:', expenses);

  // 🔹 Extract unique categories and years
  const uniqueCategories = useMemo(
    () => Array.from(new Set(expenses.map((e) => e.category))).filter(Boolean),
    [expenses]
  );

  const uniqueYears = useMemo(
    () =>
      Array.from(
        new Set(expenses.map((e) => new Date(e.date).getFullYear().toString()))
      ).sort((a, b) => +b - +a),
    [expenses]
  );

  const handleFilterChange = (newFilters: {
    category: string;
    month: string;
    year: string;
  }) => {
    setFilters(newFilters);
  };

  // 🔹 Apply filters
  const filteredExpenses = useMemo(() => {
    return expenses.filter((exp) => {
      const expDate = new Date(exp.date);
      const matchesCategory =
        !filters.category || exp.category === filters.category;
      const matchesMonth =
        !filters.month ||
        (expDate.getMonth() + 1).toString().padStart(2, '0') === filters.month;
      const matchesYear =
        !filters.year || expDate.getFullYear().toString() === filters.year;

      return matchesCategory && matchesMonth && matchesYear;
    });
  }, [expenses, filters]);

  return (
    <main className="min-h-screen bg-gray-400 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">💸 Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />

      <ExpenseFilters
        categories={uniqueCategories}
        years={uniqueYears}
        onFilterChange={handleFilterChange}
      />

      <ExpenseSummary expenses={filteredExpenses} />

      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />

      {/* Expenses Preview (temporary debug output)
      <pre className="mt-6 bg-white p-4 rounded shadow">
        {JSON.stringify(expenses, null, 2)}
      </pre> */}
    </main>
  );
}
