import React, { useMemo } from 'react';
import useExpenses from './hooks/useExpenses';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App: React.FC = () => {
  const { expenses, addExpense, deleteExpense } = useExpenses();

  // Calculate total amount spent
  const totalSpent = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  // Calculate number of expenses
  const totalCount = useMemo(() => expenses.length, [expenses]);

  return (
    <main className="min-h-screen bg-gray-400 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">💸 Expense Tracker</h1>

      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-700">
          Total Spent:{' '}
          <span className="text-green-600">${totalSpent.toFixed(2)}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Number of Expenses:{' '}
          <span className="text-blue-600">{totalCount}</span>
        </p>
      </div>

      {/* Add Expense Form */}
      <ExpenseForm onAdd={addExpense} />
      {/* Expense List */}
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />

      {/* Expenses Preview (temporary debug output) */}
      <pre className="mt-6 bg-white p-4 rounded shadow">
        {JSON.stringify(expenses, null, 2)}
      </pre>
    </main>
  );
};

export default App;
