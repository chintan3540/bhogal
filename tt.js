// 🔹 3rd Function → Create Secure URL
function createSecureUrl({ type, key, userId, userLocationId }) {
  const baseUrl = "https://api.myapp.com/user/";

  return `${baseUrl}${encodeURIComponent(userId)}/` +
         `${encodeURIComponent(userLocationId)}/data/` +
         `${encodeURIComponent(type)}/` +
         `${encodeURIComponent(key)}`;
}

// 🔹 2nd Function → Process Secure Data (Mask Sensitive Info)
function processSecureData(data) {
  return {
    userId: data.userId,
    userLocationId: data.userLocationId,
    type: data.type === "password" ? "****MASKED****" : data.type,
    key: data.key
  };
}

// 🔹 1st Function → Handle Request
function handleRequest(data) {
  const { type, key, userId, userLocationId } = data;

  const processedData = processSecureData(data);

  const url = createSecureUrl({ type, key, userId, userLocationId });

  // Secure Log
  console.log("User Access Log", {
    url,
    user: processedData
  });
}

// Call Function
handleRequest({
  type: "password",
  key: "forgot",
  userId: "12345",
  userLocationId: "345678"
});
