function getRegexForGuid() {
  return /^\{[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\}$/i;
}

function getRegexForPitcher() {
  return /P00[A-Z]/;
}

function getPasswordValidator(minLength) {
  const regex = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{${minLength},}$`);
  return regex;
}
