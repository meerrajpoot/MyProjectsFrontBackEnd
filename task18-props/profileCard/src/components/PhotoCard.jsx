// // src/components/ProfileCard.js
// import React from 'react';

// const ProfileCard = ({ name, age, bio }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
//       <h2 className="text-2xl font-bold mb-2">{name}</h2>
//       <p className="text-gray-700 mb-2">Age: {age}</p>
//       <p className="text-gray-700">{bio}</p>
//     </div>
//   );
// };

// export default ProfileCard;

// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, age, bio }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">Age: {age}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

export default ProfileCard;
