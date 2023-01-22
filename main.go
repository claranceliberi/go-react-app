package main

import (
	"github.com/claranceliberi/go-react-app/database"
	"github.com/claranceliberi/go-react-app/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()

	routes.Setup(app)

	app.Listen(":3000")
}
