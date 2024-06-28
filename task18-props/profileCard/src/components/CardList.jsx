// // src/components/ProfilesList.js
// import React, { useState, useEffect } from 'react';
// import ProfileCard from './ProfileCard';

// const defaultProfiles = [
//   { name: 'John Doe', age: 30, bio: 'Software developer from NY.' },
//   { name: 'Jane Smith', age: 25, bio: 'Graphic designer from CA.' },
//   { name: 'Mike Johnson', age: 35, bio: 'Project manager from TX.' },
//   { name: 'Emily Davis', age: 28, bio: 'Marketing specialist from FL.' },
//   { name: 'Chris Brown', age: 32, bio: 'UX/UI designer from WA.' },
//   { name: 'Sarah Wilson', age: 27, bio: 'Product manager from CO.' },
//   { name: 'David Clark', age: 40, bio: 'Data scientist from MA.' },
//   { name: 'Laura Lewis', age: 23, bio: 'Content writer from OR.' },
//   { name: 'Daniel Walker', age: 29, bio: 'Full stack developer from TX.' },
//   { name: 'Jessica Martinez', age: 33, bio: 'HR manager from IL.' },
//   { name: 'Jessica Martinez', age: 33, bio: 'HR manager from IL.' },
// ];

// const ProfilesLists = () => {
//   const [profiles, setProfiles] = useState(() => {
//     const savedProfiles = localStorage.getItem('profiles');
//     return savedProfiles ? JSON.parse(savedProfiles) : defaultProfiles;
//   });

//   useEffect(() => {
//     localStorage.setItem('profiles', JSON.stringify(profiles));
//   }, [profiles]);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {profiles.map((profile, index) => (
//         <ProfileCard 
//           key={index}
//           name={profile.name}
//           age={profile.age}
//           bio={profile.bio}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProfilesLists;
// src/components/ProfilesList.js


// import React, { useState, useEffect } from 'react';
// import ProfileCard from './ProfileCard';
// import axios from 'axios';

// const ProfilesList = ({ apiUrl }) => {
//   const [profiles, setProfiles] = useState(() => {
//     const savedProfiles = localStorage.getItem('profiles');
//     return savedProfiles ? JSON.parse(savedProfiles) : [];
//   });

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         const fetchedProfiles = response.data;
//         setProfiles(fetchedProfiles);
//         localStorage.setItem('profiles', JSON.stringify(fetchedProfiles));
//       } catch (error) {
//         console.error('Error fetching profiles:', error);
//       }
//     };

//     if (profiles.length === 0) {
//       fetchProfiles();
//     }
//   }, [apiUrl]);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {profiles.map((profile, index) => (
//         <ProfileCard 
//           key={index}
//           name={profile.name}
//           age={profile.age}
//           bio={profile.bio}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProfilesList;

// src/components/ProfilesList.js
import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';

const ProfilesList = ({ apiUrl }) => {
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(apiUrl);
        const fetchedProfiles = response.data;
        setProfiles(fetchedProfiles);
        localStorage.setItem('profiles', JSON.stringify(fetchedProfiles));
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    if (profiles.length === 0) {
      fetchProfiles();
    }
  }, [apiUrl]);

  // const clearLocalStorage = () => {
  //   localStorage.removeItem('profiles');
  //   setProfiles([0]);
  // };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={clearLocalStorage}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Clear Profiles
      </button>
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
    </div>
  );
};

export default ProfilesList;

