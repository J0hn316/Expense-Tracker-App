import type { Expense } from '../types/Expense';

type ExpenseItemProps = {
  expenses: Expense;
  onDelete: (id: number) => void;
};

export default function ExpenseItem({ expenses, onDelete }: ExpenseItemProps) {
  return (
    <li className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-400">
          {new Date(expenses.date).toLocaleDateString()}
        </p>
        <p className="font-semibold">{expenses.title}</p>
        <p className="text-sm text-gray-600">{expenses.category}</p>
        <p className="text-sm text-gray-500 italic">{expenses.description}</p>
      </div>

      <div className="flex items-center gap-4 mt-3 sm:mt-0">
        <span className="text-green-600 font-semibold">
          ${expenses.amount.toFixed(2)}
        </span>
        <button
          onClick={() => onDelete(expenses.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
