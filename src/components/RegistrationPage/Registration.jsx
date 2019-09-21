import React from "react";

import Email from "./Email";
import Password from "./Password";
import PhoneAge from "./PhoneAge";
import Referral from "./Referral";

const Registration = props => {
  return (
    <div className="fullHeight">
      <Email />
      <Password />
      <PhoneAge />
      <Referral />
    </div>
  );
};

export default Registration;
