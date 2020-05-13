import React from "react";
import UserHeader from './UserHeader';
import Motivation from './Motivation'

export default function App() {
  const [timeToDeath, setTimeToDeath] = React.useState(6);
  const [searchText,setSearchText] = React.useState("");
  const handleChangeTime = event => setTimeToDeath(event.target.value);
  const handleChangeText  = event => setSearchText(event.target.value);

  return (
    <main>
      <UserHeader />
      <Motivation timeToDeath={timeToDeath} />
      {/* <Buttons handleChangeTime={handleChangeTime} /> */}
    </main>
  );
}
