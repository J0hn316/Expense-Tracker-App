import { useExpenses } from './hooks/useExpenses';

const App = () => {
  const { expenses, addExpense, deleteExpense } = useExpenses();

  // Example hardcoded add for now
  const handleAdd = () => {
    addExpense({
      title: 'Test Expense',
      amount: 100,
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <main className="min-h-screen bg-gray-400 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">💸 Expense Tracker</h1>
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
      >
        Add Dummy Expense
      </button>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="bg-white shadow p-4 rounded flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{expense.title}</div>
              <div className="text-sm text-gray-500">
                {expense.category} • {expense.date}
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-600 font-bold">
                ${expense.amount.toFixed(2)}
              </div>
              <button
                onClick={() => deleteExpense(expense.id)}
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
