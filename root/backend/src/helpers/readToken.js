const readTokenFromHeader = (auth) => {
  let token;
  const validToken = auth.toString();
  if (validToken && validToken.toLowerCase().startsWith('bearer')) {
    token = validToken.substring(7);
    return token;
  }
  return null;
};

module.exports = readTokenFromHeader;
