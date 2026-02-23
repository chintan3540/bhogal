function createSecureUrl(data) {
  console.log("User Access Data", data);
  const baseUrl = "https://api.myapp.com/user/";
  return `${data.baseUrl}${data.userId}/${data.userLocationId}/data/${data.type}`;
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
  apiKey: process.env.apiKeu,
  userId: "12345",
  userLocationId: "345678",
  password: "Pass@123$"
});
