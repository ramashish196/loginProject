import usermodel from "../models/userinfo.js";

class Allroutes {
  static homeroute = (req, res, next) => {
    res.render("index");
    next();
  };
  static regroute = (req, res, next) => {
    res.render("reg");
    next();
  };
  static loginroute = (req, res, next) => {
    res.render("login");
  };

  static userinfo = async (req, res) => {
    try {
      const doc = usermodel({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const result = await doc.save();
      // console.log(result);
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  };
  static verifylogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log(email, password);
      const result = await usermodel.findOne({ email: email });
      // console.log(result);
      if (result != null) {
        if (result.email == email && result.password == password) {
          res.send(`<h1>=== ${result}</h1>`);
        } else {
          res.send("email or password is incorrect");
        }
      } else res.send("u r not a registered user");
    } catch (err) {
      console.log(err);
    }
  };
}

export { Allroutes };
