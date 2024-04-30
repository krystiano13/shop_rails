Rails.application.routes.draw do
  devise_for :users

  get "up" => "rails/health#show", as: :rails_health_check

  #products
  get "products/:user", to: "products#index", as: :products
  post "products/add/:user", to: "products#create", as: :add_product
  put "products/edit/:id", to: "products#update", as: :edit_product
  delete "products/delete/:id", to: "products#destroy", as: :delete_product

  #ordered_products
  get "orders/", to: "orders#index", as: :orders
  put "orders/accept/:id", to: "orders#accept", as: :orders_accept
  post "orders/create", to: "orders#create", as: :orders_create
  
end
