import React, { useState, useMemo } from 'react';

const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 120, type: 'income' },
    { id: 2, amount: 50, type: 'expense' },
    { id: 3, amount: 200, type: 'expense' },
    // ...1000+ more items
  ]);

  const [filter, setFilter] = useState('');

  // 1. Filter transactions (expensive calculation)
  const filteredTransactions = useMemo(() => {
    console.log('Recalculating filtered transactions...');
    return transactions.filter((transaction) =>
      transaction.type.includes(filter.toLowerCase())
    );
  }, [transactions, filter]); // Re-run only when `transactions` or `filter` changes

  // 2. Calculate total balance (dependent on filtered data)
  const totalBalance = useMemo(() => {
    console.log('Recalculating total balance...');
    return filteredTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
  }, [filteredTransactions]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by type (e.g., 'expense')"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            ${transaction.amount} - {transaction.type}
          </li>
        ))}
      </ul>
      <h3>Total Balance: ${totalBalance}</h3>
    </div>
  );
};

export default TransactionDashboard;

// import React, { useState } from 'react';

// const TransactionDashboard = () => {
//   const [transactions, setTransactions] = useState([
//     { id: 1, amount: 120, type: 'income' },
//     { id: 2, amount: 50, type: 'expense' },
//     { id: 3, amount: 200, type: 'expense' },
//     // ...1000+ more items
//   ]);

//   const [filter, setFilter] = useState('');

//   // ❌ No useMemo: these are recalculated on every render
//   console.log('Recalculating filtered transactions...');
//   const filteredTransactions = transactions.filter((transaction) =>
//     transaction.type.includes(filter.toLowerCase())
//   );

//   console.log('Recalculating total balance...');
//   const totalBalance = filteredTransactions.reduce(
//     (sum, transaction) => sum + transaction.amount,
//     0
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Filter by type (e.g., 'expense')"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       />
//       <ul>
//         {filteredTransactions.map((transaction) => (
//           <li key={transaction.id}>
//             ${transaction.amount} - {transaction.type}
//           </li>
//         ))}
//       </ul>
//       <h3>Total Balance: ${totalBalance}</h3>
//     </div>
//   );
// };

// export default TransactionDashboard;
