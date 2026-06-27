export const mockExpensesGraphData = {
  default: {
    totalAmount: 125000,
    data: [
      {
        date: "Mon",
        value: 12000,
      },
      {
        date: "Tue",
        value: 18000,
      },
      {
        date: "Wed",
        value: 15000,
      },
      {
        date: "Thu",
        value: 25000,
      },
      {
        date: "Fri",
        value: 22000,
      },
      {
        date: "Sat",
        value: 28000,
      },
      {
        date: "Sun",
        value: 32000,
      },
    ],
  },
};

export const mockExpenseBreakDownData = {
  default: {
    totalAmount: 125000,
    data: [
      {
        name: "Food",
        value: 12000,
      },
      {
        name: "Travel",
        value: 8000,
      },
      {
        name: "Shopping",
        value: 15000,
      },
      {
        name: "Bills",
        value: 7500,
      },
      {
        name: "Health",
        value: 5000,
      },
    ],
  },
};

export const mockTransactionHistory = {
  default: [
    {
      id: 1,
      name: "Salary Credit",
      note: "Monthly Salary",
      timestamp: "Today, 10:30 AM",
      amount: "25,000",
      type: "income",
    },
    {
      id: 2,
      name: "Groceries",
      note: "Reliance Fresh",
      timestamp: "Yesterday, 7:45 PM",
      amount: "1,250",
      type: "expense",
    },
    {
      id: 1,
      name: "Salary Credit",
      note: "Monthly Salary",
      timestamp: "Today, 10:30 AM",
      amount: "25,000",
      type: "income",
    },
    {
      id: 2,
      name: "Groceries",
      note: "Reliance Fresh",
      timestamp: "Yesterday, 7:45 PM",
      amount: "1,250",
      type: "expense",
    },
    {
      id: 1,
      name: "Salary Credit",
      note: "Monthly Salary",
      timestamp: "Today, 10:30 AM",
      amount: "25,000",
      type: "income",
    },
    {
      id: 2,
      name: "Groceries",
      note: "Reliance Fresh",
      timestamp: "Yesterday, 7:45 PM",
      amount: "1,250",
      type: "expense",
    },
  ],
};

export const mockBudgetTracking = {
  default:{
    totalBudget: 50000,
    spentAmount: 35000,
    budgetCategories: [
      {
        name: "Food",
        amount: 12000,
        percentage: 24,
      },
      {
        name: "Travel",
        amount: 8000,
        percentage: 16,
      },
      {
        name: "Shopping",
        amount: 15000,
        percentage: 30,
      },
      {
        name: "Bills",
        amount: 7500,
        percentage: 15,
      }
    ],  
    topCategories: [
      {
        rank: 1,
        name: "Food",
        amount: 12000,
        icon: "🍔",
      },
      {
        rank: 2,
        name: "Travel",
        amount: 8000,
        icon: "✈️",
      },
      {
        rank: 3,
        name: "Shopping",
        amount: 15000,
        icon: "🛍️",
      },
    ],
  
  }
}
