import React from "react";

import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import PhoneAge from "./PhoneAge";
import Referral from "./Referral";

const Registration = props => {
  return (
    <div className="fullHeight">
      <Name />
      <Email />
      <Password />
      <PhoneAge />
      <Referral />
    </div>
  );
};

export default Registration;
