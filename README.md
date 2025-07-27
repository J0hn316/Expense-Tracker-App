# 💸 Expense Tracker App

A simple and responsive Expense Tracker built using **React**, **TypeScript**, and **Tailwind CSS**. This app allows users to log expenses with detailed information, filter by category/date, and view summary statistics — all stored locally in the browser.

---

## 🚀 Features

- ✅ Add new expenses with:
  - Title, Amount, Date, Category, and optional Description
- ✅ View all expenses in a list
- ✅ Delete any expense entry
- ✅ Filter expenses by:
  - Category (dynamically generated)
  - Month
  - Year (dynamically generated)
- ✅ View expense summary:
  - Total amount spent
  - Total number of expenses
- ✅ Clear filters to reset view
- ✅ Data persists using `localStorage`
- ✅ Mobile-first responsive layout with Tailwind CSS

---

## 🧠 Technologies Used

- **React** with functional components
- **TypeScript** for static typing
- **Tailwind CSS** for styling
- **Custom Hooks** (`useExpenses`) to encapsulate logic

---

## 🧩 Future Improvements (Tier 3 Ideas)

- Add chart visualizations (e.g., Pie or Bar charts)
- Edit/update existing expenses
- User accounts & authentication
- Backend integration with a database (e.g., Firebase, Supabase, etc.)
- Pagination, search, and sorting

---

## 🧾 Project Structure

```
expense-tracker-app/
├── public/
├── src/
│   ├── components/        # Reusable components
│   ├── types/             # TypeScript types
│   ├── utils/             # Helper functions (e.g. formatting)
│   ├── hooks/             # Hook to manage expense state
│   ├── App.tsx            # Root component
│   ├── main.tsx           # App entry
│   └── index.css          # Tailwind base styles
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/J0hn316/Expense-Tracker-App.git
cd expense-tracker-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 📄 License

MIT — free to use and modify.
