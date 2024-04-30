class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.string :user
      t.integer :product_id
      t.integer :amount

      t.timestamps
    end
  end
end
