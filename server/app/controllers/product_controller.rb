class ProductController < ApplicationController
    def index
        products = Product.where(user: params[:user])

        if products.present?
            render json: {
                products: products
            }
        else
            render json: {
                products: Array.new
            }
        end
    end

    def create
    
    end
end
