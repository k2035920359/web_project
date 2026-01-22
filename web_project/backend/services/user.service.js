// 假資料（之後換 DB）
const users = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Amy' }
];

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find(u => u.id === Number(id));
}

function createUser(name) {
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  return newUser;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
