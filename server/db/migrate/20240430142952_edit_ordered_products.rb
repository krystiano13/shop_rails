class EditOrderedProducts < ActiveRecord::Migration[7.1]
  def change
    add_column :ordered_products, :accept, :boolean
  end
end
