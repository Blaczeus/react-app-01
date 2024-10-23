import './assets/tailwind.css';
import React, { useState } from 'react';
import ThemeToggleButton from './utils';
import "@theme-toggles/react/css/Classic.css"
import ProfileForm from './ProfileForm'
import ProfileCard from './ProfileCard';


function App ()
{
  const [ profileData, setProfileData ] = useState( null );

  const handleFormSubmit = ( data ) =>
  {
    setProfileData( data );
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggleButton />
      <ProfileForm onSubmit={handleFormSubmit} />
      {profileData && <ProfileCard profileData={profileData} />}
    </div>
  );
}

export default App;