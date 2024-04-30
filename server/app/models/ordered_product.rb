class OrderedProduct < ApplicationRecord
    validates :name, presence: true
    validates :amount, presence: true
    validates :order_id, presence: true
    validates :price, presence: true
    validates :adress, presence: true
    validates :postal_code, presence: true
    validates :person_name, presence: true
    validates :accept, presence: true
end
