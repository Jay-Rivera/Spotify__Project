let accessToken;

const Spoitify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expirationInURL = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expirationInURL) {
      accessToken = tokenInURL[1];
      const expirationTime = Number(expirationInURL[1]);
      window.setTimeout(() => (accessToken = ""), expirationTime * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const clientID = "your_client_id_here";
      const redirectURI = "http://localhost:3000/";
      const scope = "playlist-modify-public";
      const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=${scope}&redirect_uri=${redirectURI}`;
      window.location = authURL;
    }
  },
};

export { Spoitify };
