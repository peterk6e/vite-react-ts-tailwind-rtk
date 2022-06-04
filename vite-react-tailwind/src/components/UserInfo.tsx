import React from "react";
import { User } from "../models/models";
import { useSelector } from "react-redux";

export const UserInfo = () => {
  const user: User = useSelector((state: any) => state.value);

  return (
    <div className="flex items-center justify-center text-gray-500 -mt-16">
      <div>{!user.email?"":"Welcome " + user.email}</div>
    </div>
  );
};
