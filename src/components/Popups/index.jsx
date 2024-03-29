import React, { useRef } from "react";

import { useSelector } from "react-redux";

import { GreetingPopup } from "./GreetingPopup";
import { LoginPopup } from "./LoginPopup";
import { PleaseRegister } from "./PleaseRegisterPopup";
import { RegistrationPopup } from "./RegistrationPopup";
import { ResetPasswordPopup } from "./ResetPasswordPopup";

export const Popups = () => {
  const {
    isOpenGreetingPopup,
    isOpenPleaseRegisterPopup,
    isShowLoginPopup,
    isShowRegistrationPopup,
    isShowResetPasswordPopup,
  } = useSelector((state) => state.popups);

  const popupsRef = useRef(null);

  return (
    <div
      ref={popupsRef}
      style={{
        position: "fixed",
        height: "0",
        zIndex: "10",
      }}
    >
      {isOpenGreetingPopup && <GreetingPopup />}
      {isOpenPleaseRegisterPopup && <PleaseRegister />}
      {isShowLoginPopup && <LoginPopup />}
      {isShowRegistrationPopup && <RegistrationPopup />}
      {isShowResetPasswordPopup && <ResetPasswordPopup />}
    </div>
  );
};
