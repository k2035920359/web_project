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


exports.updateUser = (req, res) => {
  const { name } = req.body;
  const userId = req.params.id;
  const updatedUser = userService.updateUser(userId, name);

  if (!updatedUser) { 
    return res.status(404).json({
      error: 'User not found'
    });
  }
  res.json(updatedUser);
};


exports.deleteUser = (req, res) => {
  // 刪除使用者的邏輯（此處省略）
  res.status(204).send();
};
  

