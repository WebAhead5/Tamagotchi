import React from "react";
import UserHeader from './UserHeader';
import Motivation from './Motivation'
import Buttons from './Buttons';
import styled from '@emotion/styled';

export default function App() {
  const [timeToDeath, setTimeToDeath] = React.useState(6);
  const [searchText, setSearchText] = React.useState("");
  const handleChangeTime = event => { console.log(timeToDeath); return setTimeToDeath((timeToDeath + 5 % 30 > 30 ? 30 : timeToDeath + 5)); }
  const handleChangeText = event => setSearchText(event.target.value);

  const Page = styled.div`


    `

  return (
    <Page>
      <UserHeader />
      <Motivation timeToDeath={timeToDeath} />
      <Buttons handleChangeTime={handleChangeTime} />
    </Page>
  );
}
