Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  get "products/:user", to: "products#index", as: :products
  post "products/add/:user", to: "products#create", as: :add_product
  put "products/edit/:id", to: "products#update", as: :edit_product
  delete "products/delete/:id", to: "products#destroy", as: :delete_product

  
end
