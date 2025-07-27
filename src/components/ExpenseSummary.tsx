import type { Expense } from '../types/Expense';

type ExpenseSummaryProps = {
  expenses: Expense[];
};

export default function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalCount = expenses.length;

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <div className="flex justify-between text-gray-700">
        <span>Total Expenses:</span>
        <span>{totalCount}</span>
      </div>
      <div className="flex justify-between text-gray-700 mt-1">
        <span>Total Spent:</span>
        <span>${totalSpent.toFixed(2)}</span>
      </div>
    </div>
  );
}
