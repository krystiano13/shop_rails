class CreateOrderedProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :ordered_products do |t|
      t.string :name
      t.integer :amount
      t.integer :order_id
      t.float :price
      t.string :adress
      t.string :postal_code
      t.string :person_name

      t.timestamps
    end
  end
end
