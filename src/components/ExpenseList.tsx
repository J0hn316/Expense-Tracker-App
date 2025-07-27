import type { Expense } from '../types/Expense';

type ExpenseListProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <p className="text-gray-500 text-center italic bg-white rounded p-6 shadow mt-2">
        No expenses to display. Add one above ☝️.
      </p>
    );
  }

  return (
    <ul className="space-y-2 mt-2">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center bg-white p-4 rounded shadow"
        >
          <div>
            <p className="text-sm text-gray-500">{expense.date}</p>
            <p className="font-semibold">{expense.title}</p>
            <p className="text-sm text-gray-600 italic">
              {expense.description}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-600">
              ${expense.amount.toFixed(2)}
            </p>
            <button
              onClick={() => onDelete(expense.id)}
              className="text-sm bg-red-500 text-white rounded p-2 hover:bg-red-400 mt-1"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
