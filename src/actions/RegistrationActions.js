export function registerAge(age) {
  return {
    type: "REGISTER_AGE",
    payload: {
      age: age
    }
  };
}

export function registerEmail(email) {
  return {
    type: "REGISTER_EMAIL",
    payload: {
      email: email
    }
  };
}

export function registerName(name) {
  return {
    type: "REGISTER_NAME",
    payload: {
      name: name
    }
  };
}

export function registerPassword(password) {
  return {
    type: "REGISTER_PASSWORD",
    payload: {
      password: password
    }
  }
}

export function registerPhone(phone) {
  return {
    type: "REGISTER_PHONE",
    payload: {
      phone: phone
    }
  };
}

export function registerReferral(referral) {
  return {
    type: "REGISTER_REFERRAL",
    payload: {
      referral: referral
    }
  }
}
