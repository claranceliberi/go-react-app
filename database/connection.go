package database

import (
	"github.com/claranceliberi/go-react-app/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB;

func Connect(){
	connection, err := gorm.Open(mysql.Open("liberi:liberi@tcp(mysql:3306)/go-react-app?charset=utf8&parseTime=True&loc=Local"), &gorm.Config{})

	if err != nil {
		panic("Could not connect to the database")
	}

	DB = connection;

	connection.AutoMigrate(&models.User{})
}