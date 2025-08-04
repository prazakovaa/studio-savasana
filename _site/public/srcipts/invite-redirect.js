const hash = window.location.hash;
if (hash.includes("invite_token")) {
  window.location.href = "/admin/" + hash;
}