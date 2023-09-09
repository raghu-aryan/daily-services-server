const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    password: {
      type: DataTypes.STRING,
      alowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      alowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      alowNull: false,
      unique: true
    },
    otp: {
      type: DataTypes.STRING,
      alowNull: true,
    },
    device: {
      type: DataTypes.TEXT,
      alowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mobile_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    type: {
      type: DataTypes.ENUM(['admin', 'operater', 'user']),
      defaultValue: 'user'
    }
  });
  return User;
};
