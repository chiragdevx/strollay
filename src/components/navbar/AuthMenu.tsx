"use client";
import React, { useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "@/store/actions/user";

type Props = {};
interface RootState {
  user: {
    isAuthenticated: boolean;
    loading: boolean;
  };
}

const AuthMenu = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );

  const handleAuthButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    dispatch(UserActions.toggleAuth());
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center mr-4">
        {/* User Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="user"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-58.6 0-111.1-26.6-146.1-68.3 17.8-7.7 62.2-23.7 90.3-31.9 2.2-.7 2.6-.8 2.6-10.7 0-10.6-1.2-18.1-3.8-23.6-3.5-7.5-7.7-20.2-9.2-31.6-4.2-4.9-9.9-14.5-13.6-32.9-3.2-16.2-1.7-22.1.4-27.6.2-.6.5-1.2.6-1.8.8-3.7-.3-23.5-3.1-38.8-1.9-10.5.5-32.8 15-51.3 9.1-11.7 26.6-26 58-28h17.5c31.9 2 49.4 16.3 58.5 28 14.5 18.5 16.9 40.8 14.9 51.3-2.8 15.3-3.9 35-3.1 38.8.1.6.4 1.2.6 1.7 2.1 5.5 3.7 11.4.4 27.6-3.7 18.4-9.4 28-13.6 32.9-1.5 11.4-5.7 24-9.2 31.6-3.3 6.9-6.6 15.1-6.6 23.3 0 9.9.4 10 2.7 10.7 26.7 7.9 72.7 23.8 93 32.1-35 41.8-87.5 68.5-146.2 68.5z"></path>
        </svg>
        {/* My Account */}
        <span className="text-gray-600 font-semibold">My Account</span>
        {/* Dropdown Arrow */}
        <button onClick={toggleDropdown} className="text-gray-600 mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <div className="py-[9px]">|</div>
      {/* Sign In/Sign Out Button */}
      {isAuthenticated ? (
        <Button onClick={handleAuthButtonClick} className="text-black-600">
          Sign Out
        </Button>
      ) : (
        <Button onClick={handleAuthButtonClick} className="text-black-600 w-32">
          Sign In
        </Button>
      )}
    </div>
  );
};

export default AuthMenu;
