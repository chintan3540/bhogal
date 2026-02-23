function sanitizeInput(value) {
  if (typeof value !== "string") {
    throw new Error("Invalid input type");
  }

  // Allow only safe characters
  if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
    throw new Error("Invalid characters detected");
  }

  return encodeURIComponent(value);
}

function createSecureUrl({ type, key, userId, userLocationId }) {
  const baseUrl = "https://api.myapp.com/user/";

  const safeUserId = sanitizeInput(userId);
  const safeLocationId = sanitizeInput(userLocationId);
  const safeType = sanitizeInput(type);
  const safeKey = sanitizeInput(key);

  return `${baseUrl}${safeUserId}/${safeLocationId}/data/${safeType}/${safeKey}`;
}

function processSecureData(data) {
  return {
    userId: sanitizeInput(data.userId),
    userLocationId: sanitizeInput(data.userLocationId),
    type: sanitizeInput(data.type),
    key: sanitizeInput(data.key)
  };
}

function handleRequest(data) {
  try {
    const processedData = processSecureData(data);

    const url = createSecureUrl(processedData);

    // Avoid logging sensitive information
    console.log("User Access Log", {
      endpoint: url,
      userId: processedData.userId
    });

  } catch (error) {
    console.error("Security validation failed:", error.message);
  }
}

handleRequest({
  type: "password",
  key: "forgot",
  userId: "12345",
  userLocationId: "345678"
});
