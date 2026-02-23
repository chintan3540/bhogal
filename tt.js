function createSecureUrl({ type, key, userId, userLocationId }) {
  const baseUrl = "https://api.myapp.com/user/";

  return `${baseUrl}${userId}/${userLocationId}/data/${type}/${key}`;
}

function handleRequest(data) {

  const { type, key, userId, userLocationId } = data;

  const url = createSecureUrl({ type, key, userId, userLocationId });

  console.log("User Access Log", {
    url,
    fullRequest: data // may contain password/token
  });

}

handleRequest({
  type: "password",
  key: "forgot",
  userId: "12345",
  userLocationId: "345678",
  token: "my-secret-token"
});
