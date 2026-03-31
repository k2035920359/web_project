const crypto = require('crypto');

// 假資料（之後換 DB）
let users = [
  { id: crypto.randomUUID(), name: 'Tom' },
  { id: crypto.randomUUID(), name: 'Amy' }
];

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

function createUser(name) {
  const newUser = {
    id: crypto.randomUUID(),
    name
  };
  users.push(newUser);
  return newUser;
}

function updateUser(id, name) {
  const user = users.find(u => u.id === id);
  if (!user) return null;
  user.name = name;
  return user;
}

function deleteUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}



module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

