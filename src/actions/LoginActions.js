export function loginEmail(email) {
  return {
    type: "LOGIN_EMAIL",
    payload: {
      email: email
    }
  };
}

export function loginPassword(password) {
  return {
    type: "LOGIN_PASSWORD",
    payload: {
      password: password
    }
  };
}
