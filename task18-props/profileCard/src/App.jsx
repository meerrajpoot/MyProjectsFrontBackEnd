import React from 'react';
import ProfilesList from './components/ProfilesList';
import './index.css';
// import CardList from './components/CardList';
import ProfilesLists from './components/CardList';

function App() {
  const apiUrl = 'https://api.example.com/profiles';
  return (
    <>
      {/* <ProfilesList /> */}
      {/* <ProfilesLists/> */}
      <ProfilesList apiUrl={apiUrl} />
    </>
  );
}

export default App;
