function createSecureUrl({ type, apiKey, userId, userLocationId }) {
  const baseUrl = "https://api.myapp.com/user/";
  return `${baseUrl}${userId}/${userLocationId}/data/${type}/${apiKey}`;
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
  apiKey: "forgot",
  userId: "12345",
  userLocationId: "345678"
});
