class EditOrderedProducts2 < ActiveRecord::Migration[7.1]
  def change
    remove_column :ordered_products, :amount
    remove_column :ordered_products, :order_id
    remove_column :ordered_products, :name
    add_column :ordered_products, :products, :string
  end
end
