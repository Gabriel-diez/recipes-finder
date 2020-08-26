class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :total_time
      t.integer :people_quantity
      t.text :ingredients, array: true, default: []
      t.text :tags, array: true, default: []

      t.timestamps
    end
  end
end
