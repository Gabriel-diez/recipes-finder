# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

data = JSON.parse(File.read('./db/recipes.json'))

recipes = data['recipes']

recipes.each do |r|
    recipe = Recipe.new(
        name: r['name'],
        total_time: r['total_time'],
        people_quantity: r['people_quantity'].to_i,
        tags: r['tags'],
        ingredients: r['ingredients'],
        img_url: r['image'],
    )
    recipe.save
end
