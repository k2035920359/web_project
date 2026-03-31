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
  const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
  const newUser = {
    id: maxId + 1,
    name
  };
  users.push(newUser);
  return newUser;
}

function updateUser(id, name) {
  const user = users.find(u => u.id === Number(id));
  if (!user) return null;
  user.name = name;
  return user;
}

function deleteUser(id) {
  const index = users.findIndex(u => u.id === Number(id));
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

