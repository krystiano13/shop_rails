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
        product = Product.new(product_params)

        if product.save!
            render json: {
                message: "Product created successfully",
            }
        else
            render json: {
                error: "Product could not be created"
            }
        end
    end

    def update
        product = Product.find_by(id: params[:id])

        if product.present?
            product.update(product_params)
            render json: {
                message: "Product updated successfully",
            }
        else
            render json: {
                error: "Product could not be updated"
            }
        end
    end

    def destroy
    end

    private 
    def product_params
        params.require(:product).permit(:name, :price, :user, :product_id, :amount)
    end
end
