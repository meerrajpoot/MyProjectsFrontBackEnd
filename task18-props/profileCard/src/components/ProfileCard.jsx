import React from 'react';

const ProfileCard = ({ name, age, bio }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2 max-w-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Age: {age}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

export default ProfileCard;
