class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :user, presence: true
  validates :product_id, presence: true
  validates :amount, presence: true
end
