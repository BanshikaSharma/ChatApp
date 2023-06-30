import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserForChat } from '../../../redux/appReducer/action';

const DisplayChatCard = ({ item }) => {

  const dispatch = useDispatch();

  // Select User For Chat
  const handelSelectUserForChat = () => {
    dispatch(selectUserForChat(item));    
  }

  return (
    <div onClick={handelSelectUserForChat} className="bg-primary-100 cursor-pointer rounded-lg shadow-md mt-3 hover:shadow-lg hover:ring-2 hover:ring-primary-200 hover:bg-primary-200 transition-shadow duration-200">
      <div className="flex items-center space-x-4 p-2">
        <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src={item.isGroupChat? "https://cdn-icons-png.flaticon.com/512/2043/2043173.png": item.users[0].pic} alt={`${item.name} image`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-primary-900 truncate dark:text-white">
            {item.isGroupChat? item.chatName: item.users[1].name}
          </p>
          <p className="text-xs text-primary-500 truncate dark:text-primary-400">
            {item.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayChatCard;