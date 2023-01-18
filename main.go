package main

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {

	_, err := gorm.Open(mysql.Open("liberi:liberi@127.0.0.1:5972/go-react-app"), &gorm.Config{})

	if err != nil {
		panic("Could not connect to the database")
	}

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Listen(":3000")
}
