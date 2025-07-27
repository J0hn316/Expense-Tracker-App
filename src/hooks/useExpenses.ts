import { useState, useEffect } from 'react';
import type { Expense } from '../types/Expense';

const LOCAL_STORAGE_KEY = 'expenses';

type UseExpensesReturn = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  deleteExpense: (id: number) => void;
};

export default function useExpenses(): UseExpensesReturn {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Load from localStorage on initial render
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setExpenses(JSON.parse(stored));
      } catch {
        console.error('Error parsing expenses from localStorage');
      }
    }
  }, []);

  // Persist to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  // Add new expense
  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense: Expense = {
      id: Date.now(),
      ...expense,
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  // Delete an expense by id
  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return { expenses, addExpense, deleteExpense };
}
