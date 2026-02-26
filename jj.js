function senitize(obj){
  const sensitiveFields = ["apiKey", "password"]
  const clone = { ...obj }

  sensitiveFields.forEach(field => {
    if(clone[field]){
      clone[field] = "***REDACTED***"
    }
  })
  return clone
}

function createSecureUrl(data) {
  console.log("User Access Data", senitize(data));
  const baseUrl = "https://api.myapp.com/user/";
  return `${baseUrl}${data.userId}/${data.userLocationId}/data/${data.type}`;
}

function handleRequest(data) {
  try {
     const url = createSecureUrl(data);
    console.log("User Access Log", url);

  } catch (error) {
    console.error("Security validation failed:", error.message);
  }
}

handleRequest({
  type: "password",
  apiKey:process.env.apiKey,
  userId: "12345",
  userLocationId: "345678",
  password: "Pass@123$",
  userName: "Ch123"
});
