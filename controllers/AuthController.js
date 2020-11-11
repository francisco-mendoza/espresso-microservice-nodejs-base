// AuthController.js
const jwt    = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../libs/config/config.dev');
const User   = require('../models/User');

const controller = {};

controller.register = async (req, res) => {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("problema al registrar usuario.")
    // crea token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expira en 24 horas
    });
    res.status(200).send({ auth: true, token: token });
  }); 
}

controller.getMe = async (req, res, next) => {
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("Problema al encontrar usuario.");
    if (!user) return res.status(404).send("No user found.");
    
    res.status(200).send(user);
  });
}

controller.login = async (req, res) => {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error en el server.');
    if (!user) return res.status(404).send('usuario no encontrado.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expira en 24 horas
    });

    res.status(200).send({ auth: true, token: token });
  });

  // var token = jwt.sign({ id: 123123 }, config.secret, {
  //   expiresIn: 86400 // expira en 24 horas
  // });

  res.status(200).send({auth: true, token: token });

}

// AuthController.js
controller.logout = async (req, res) => {
  res.status(200).send({ auth: false, token: null });
}

module.exports = controller;
