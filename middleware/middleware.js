const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const xsrfToken = req.headers["x-xsrf-token"];
  try {
    jwt.verify(xsrfToken, "tetfvgdsvcs", (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }
      //  console.log("bien authentifié");
      // on passe l'id de l'utilsateur dans la requete pour qu'il soit accessible par les prochains middleware
      req.userid = user.userid;
      // appel de prochain middleware
      next();
    });
  } catch (err) {
    res.send(err);
  }
};
module.exports.verifyToken = verifyToken;
