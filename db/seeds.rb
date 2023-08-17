# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Account.create([
  { first_name: "Sarah", last_name: "Jones", username: "sarahj", email: "sarah@example.com", password: "reminisce" },
  { first_name: "Emily", last_name: "Hart", username: "emily", email: "emily@example.com", password: "reminisce" },
  { first_name: "Melanie", last_name: "Hunt", username: "melanie", email: "melanie@example.com", password: "reminisce" },
  { first_name: "Caroline", last_name: "Simpson", username: "caroline", email: "caroline@example.com", password: "reminisce" },
  { first_name: "Bridget", last_name: "Smith", username: "bridget", email: "bridget@example.com", password: "reminisce" },
])
