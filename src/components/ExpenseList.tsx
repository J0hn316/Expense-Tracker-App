import ExpenseItem from './ExpenseItem';
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
    <ul className="space-y-4 mt-6">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenses={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
}
