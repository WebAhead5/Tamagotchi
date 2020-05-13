import React from "react";
import UserHeader from './UserHeader';
import Motivation from './Motivation'
import Buttons from './Buttons';

export default function App() {
  const [timeToDeath, setTimeToDeath] = React.useState(30);
  const handleChangeTime = event => setTimeToDeath(timeToDeath +5 % 30 > 30? 30:timeToDeath +5);

  React.useEffect(() => {
    const interval = setInterval(() => setTimeToDeath((timeToDeath) =>{
     if(timeToDeath > 0) 
      return timeToDeath - 1
     else
      return 0;
    }), 1000)
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <UserHeader timeToDeath={timeToDeath}/>
      <Motivation timeToDeath={Math.round(timeToDeath/6)} />
      <Buttons handleChangeTime={handleChangeTime} />
    </div>
  );
}
