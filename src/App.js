import React from "react";

import Layout from "./components/Layout";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => (
  <>
    <Layout title="Профіль соціальної мережі">
      <Profile {...user} />
    </Layout>

    <Layout title="Секція статистики">
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </Layout>

    <Layout title="Список друзів">
      <FriendList friends={friends} />
    </Layout>

    <Layout title="Історія транзакцій">
      <TransactionHistory items={transactions} />
    </Layout>
  </>
);

export default App;
