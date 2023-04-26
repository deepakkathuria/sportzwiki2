const { Sequelize, DataTypes, QueryTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", 
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true

        },
        title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        no_of_revisions: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        meta_description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        meta_title:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status:{
            type:DataTypes.TEXT, 
            allowNull:false   
        },
        focus_keyword:{
            type:DataTypes.TEXT, 
            allowNull:false   

        },
        category:{
          type:DataTypes.TEXT, 
          allowNull:false   

      },
      },
    );
    return Post;
  };
  