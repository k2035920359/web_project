const userService = require('../services/user.service');

exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.getUser = (req, res) => {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    });
  }

  res.json(user);
};

exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: 'name is required'
    });
  }

  const newUser = userService.createUser(name);
  res.status(201).json(newUser);
};
