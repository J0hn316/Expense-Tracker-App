import { useState } from 'react';
import type { Expense } from '../types/Expense';

type ExpenseFormProps = {
  onAdd: (expense: Omit<Expense, 'id'>) => void;
};

export default function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!title || !amount || !category || !date) {
      alert('Please fill in all fields');
      return;
    }

    onAdd({
      date,
      title,
      description,
      category,
      amount: parseFloat(amount),
    });

    // Reset form
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <div>
        <label className="block font-semibold mb-1">Date</label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Grocery Shopping"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. Buy milk, eggs, and bread"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Amount</label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. $25.50"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Category</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Select a category --</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      >
        Add Expense
      </button>
    </form>
  );
}
