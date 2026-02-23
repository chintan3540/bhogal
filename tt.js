

function createSecureUrl({ type, key, userId, userLocationId }) {
  const baseUrl = "https://api.myapp.com/user/";
  return `${baseUrl}${userId}/${userLocationId}/data/${type}/${key}`;
}


function handleRequest(data) {
  const { type, key, userId, userLocationId } = data;

  const url = createSecureUrl({ type, key, userId, userLocationId });

  // Log securely (No password/token leak)
  console.log("User Access Log", {
    url: url,
  });


handleRequest({
  type: "password",
  key: "forgot",
  userId: "12345",
  userLocationId: "345678"
})
