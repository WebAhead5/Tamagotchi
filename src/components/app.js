import React from "react";
import UserHeader from './UserHeader';
import Buttons from './Buttons';
import styled from '@emotion/styled';

export default function App() {
  const [timeToDeath, setTimeToDeath] = React.useState(30);
  const [searchText, setSearchText] = React.useState("");
  const handleChangeTime = event => { console.log("vvvv"); setTimeToDeath(event.target.value) };
  const handleChangeText = event => setSearchText(event.target.value);



  const Page = styled.div`
    margin: auto;
    position: absolute;
    background: linear-gradient(to bottom,rgba(200,200,200),pink);
   
    display: flex;
    flex-direction: coulm;
   justify-content: space-between;
    align-items: center;
    height: 800px;
    width: 600;px
    border-radius: 15px ;

    `

  return (
    <Page>
      <UserHeader />
      {/* { <Motivation timeToDeath={timeToDeath} /> */}
      <Buttons handleChangeTime={handleChangeTime} /> }

    </Page>
  );
}
