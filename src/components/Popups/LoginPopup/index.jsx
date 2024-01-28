import React from "react";

import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline, IoLogIn } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  setIsShowLoginPopup,
  setIsShowRegistrationPopup,
  setIsShowResetPasswordPopup,
} from "src/redux/features/popupsSlice";

export const LoginPopup = () => {
  const dispatch = useDispatch();
  return (
    <div className="popupWrapper">
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />

        <button
          className="closePopup"
          onClick={() => dispatch(setIsShowLoginPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Password" />
          <button type="submit">
            Login <IoLogIn />
          </button>
          <button
            onClick={() => {
              dispatch(setIsShowResetPasswordPopup(true));
              dispatch(setIsShowLoginPopup(false));
            }}
          >
            Reset password <TbPasswordFingerprint />
          </button>
          <p className="or">-- or --</p>
        </form>
        <button>
          Login with Google <FcGoogle />
        </button>
        <p>
          Don't have an account?{" "}
          <button
            onClick={() => {
              dispatch(setIsShowLoginPopup(false));
              dispatch(setIsShowRegistrationPopup(true));
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};
