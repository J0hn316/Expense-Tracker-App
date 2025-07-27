import React from 'react';
import useExpenses from './hooks/useExpenses';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';

const App: React.FC = () => {
  const { expenses, addExpense, deleteExpense } = useExpenses();

  return (
    <main className="min-h-screen bg-gray-400 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">💸 Expense Tracker</h1>
      <ExpenseSummary expenses={expenses} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      {/* Expenses Preview (temporary debug output) */}
      <pre className="mt-6 bg-white p-4 rounded shadow">
        {JSON.stringify(expenses, null, 2)}
      </pre>
    </main>
  );
};

export default App;
