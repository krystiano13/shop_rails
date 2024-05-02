class OrderedProduct < ApplicationRecord
    validates :products, presence: true
    validates :price, presence: true
    validates :adress, presence: true
    validates :postal_code, presence: true
    validates :person_name, presence: true
end
