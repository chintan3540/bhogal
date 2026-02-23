function createSecureUrl({ type, key, userId, userLocationId, token }) {
  const baseUrl = "https://api.myapp.com/user/";

  return `${baseUrl}${userId}/${userLocationId}/data/${type}/${token}`;
}

function handleRequest(data) {

  const { type, key, userId, userLocationId, token } = data;

  const url = createSecureUrl({ type, key, userId, userLocationId, token });

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
