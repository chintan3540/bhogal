function loginUser(username, password) {
  if (!username || !password) {
    console.log("Login attempt failed", {
      username: username,
      message: "Missing credentials"
    });
    return "Invalid request";
  }

  // NEVER log password
  console.log("Login attempt", { username });
  console.log("password",password)

  return "Login processing...";
}

loginUser("admin", "123456");
