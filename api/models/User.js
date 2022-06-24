const s = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends s.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: {
      type: s.STRING,
      allowNull: false,
    },
    surname: {
      type: s.STRING,
      allowNull: false,
    },
    email: {
      type: s.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: s.STRING,
      allowNull: false,
    },
    salt: {
      type: s.STRING,
    },
    phone: {
      type: s.INTEGER,
    },
    completeName: {
      type: s.VIRTUAL,
      get() {
        return this.name + " " + this.surname;
      },
    },
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    })
    .then(() => {
      (user.name =
        user.name[0].toUpperCase() + user.name.toLowerCase().slice(1)),
        (user.surname =
          user.surname[0].toUpperCase() + user.surname.toLowerCase().slice(1));
    });
});

module.exports = User;
