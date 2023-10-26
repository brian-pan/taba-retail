import bcrypt from "bcryptjs";

const users = [
  {
    name: "Taba Admin",
    email: "tabaadmin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "NZ",
    email: "nz@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Neuvillette",
    email: "neuvi11ett3@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
