function createSecureUrl({ type, key, userId, userLocationId }) {
  const baseUrl = "https://api.myapp.com/user/";
  const url = `${baseUrl}${userId}/${userLocationId}/data/${type}/${key}`;
  console.log(url)
  return url
}

function processSecureData(data) {
  return {
    userId: data.userId,
    userLocationId: data.userLocationId,
    type: data.type,
    key: data.key
  };
}

function handleRequest(data) {
  const { type, key, userId, userLocationId } = data;

  const processedData = processSecureData(data);

  const url = createSecureUrl({ type, key, userId, userLocationId });
  console.log(url)
  console.log("User Access Log", {
    url,
    user: processedData
  });
} // ✅ Properly closed function

handleRequest({
  type: "password",
  apiKey: "forgot",
  userId: "12345",
  userLocationId: "345678"
});
