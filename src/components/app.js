import React from "react";
import UserHeader from './UserHeader';
import Motivation from './Motivation'
import Buttons from './Buttons';

export default function App() {
  const [timeToDeath, setTimeToDeath] = React.useState(6);
  const handleChangeTime = event => {console.log(timeToDeath); return setTimeToDeath((timeToDeath +5 % 30 > 30? 30:timeToDeath +5));}


  return (
    <div>
      <UserHeader />
      <Motivation timeToDeath={timeToDeath} />
      <Buttons handleChangeTime={handleChangeTime} />
    </div>
  );
}
