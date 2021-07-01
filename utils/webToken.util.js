const jwt = require('jsonwebtoken');

class WebToken {
  constructor() {
    this.jwt = jwt;
  }

  generate = user => {
    return this.jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
  }

  verify = token => this.jwt.verify(token, process.env.TOKEN_SECRET)
}

module.exports = new WebToken();
