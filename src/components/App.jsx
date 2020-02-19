import React from 'react';
import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);
export default App;
