import React from 'react';

const UserCard = ({ name, email, imageSrc }) => {
  return (
    <div className=" bg-white cursor-pointer rounded-lg shadow-md mt-3 hover:shadow-lg hover:ring-2 hover:ring-blue-500 transition-shadow duration-200">
      <div className="flex items-center space-x-4 p-2">
        <div className="flex-shrink-0">
          <img className="w-10 h-10 rounded-full" src={imageSrc} alt={`${name} image`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p className="text-xs text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;