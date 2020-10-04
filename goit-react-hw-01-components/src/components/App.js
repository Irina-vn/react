import React from "react";
import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friendList from "../friends.json";
import transactions from "../transactions.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </>
  );
}
