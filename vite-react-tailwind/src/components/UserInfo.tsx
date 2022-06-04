import React from "react";
import { useAppSelector } from './../app/hooks'

export const UserInfo = () => {
  const user = useAppSelector(state => state.user.value);

  return (
    <div className="flex items-center justify-center text-gray-500 -mt-16">
      <div>{!user.email?"":"Welcome " + user.email}</div>
    </div>
  );
};
