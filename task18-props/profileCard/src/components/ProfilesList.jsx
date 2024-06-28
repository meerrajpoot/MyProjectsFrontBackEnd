import React from 'react';
import ProfileCard from './ProfileCard';

const profiles =  [
    { name: 'Zahid', age: 30, bio: 'Software developer from NY.' },
    { name: 'Aqsa', age: 25, bio: 'Graphic designer from CA.' },
    { name: 'Hamza', age: 35, bio: 'Project manager from TX.' },
    { name: 'Hussnain Sab', age: 28, bio: 'Marketing specialist from FL.' },
    { name: 'Hafiz Ahsan', age: 32, bio: 'UX/UI designer from WA.' },
    { name: 'Hussain', age: 27, bio: 'Product manager from CO.' },
    { name: 'Newton', age: 40, bio: 'Data scientist from MA.' },
    { name: 'Laura Lewis', age: 23, bio: 'Content writer from OR.' },
    { name: 'Daniel Walker', age: 29, bio: 'Full stack developer from TX.' },
    { name: 'Jessica Martinez', age: 33, bio: 'HR manager from IL.' },
    { name: 'Hamza', age: 35, bio: 'Project manager from TX.' },
    { name: 'Hussnain Sab', age: 28, bio: 'Marketing specialist from FL.' },
    { name: 'Hafiz Ahsan', age: 32, bio: 'UX/UI designer from WA.' },
    { name: 'Hussain', age: 27, bio: 'Product manager from CO.' },
    { name: 'Newton', age: 40, bio: 'Data scientist from MA.' },
    { name: 'Laura Lewis', age: 23, bio: 'Content writer from OR.' },
    { name: 'Daniel Walker', age: 29, bio: 'Full stack developer from TX.' },
    { name: 'Jessica Martinez', age: 33, bio: 'HR manager from IL.' },
  ];

const ProfilesList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
        />
      ))}
    </div>
  );
};

export default ProfilesList;
