class ProductController < ApplicationController
    skip_before_action :verify_authenticity_token, raise: false  
    before_action :authenticate_devise_api_token!
    def index
        products = Product.where(user: params[:user])

        if products.present?
            render json: {
                products: products
            }, status: :ok
        else
            render json: {
                products: Array.new
            }, status: :unprocessable_entity
        end
    end

    def create
        @product = Product.new(product_params)
        if @product.save!
            render json: {
                message: "Product created successfully",
            }, status: :ok
        else
            render json: {
                error: "Product could not be created"
            }, status: :unprocessable_entity
        end
    end

    def update
        @product = Product.where(user: params[:user], name: params[:name])

        if @product.present?
            @product.update(product_params)
            render json: {
                message: "Product updated successfully",
            }, status: :ok
        else
            render json: {
                error: "Product could not be updated"
            }, status: :unprocessable_entity
        end
    end

    def destroy
        id = params[:id]
        
        if Product.destroy(id)
            render json: {
                message: "Product deleted successfully",
            }, status: :ok
        else
            render json: {
                error: "Product could not be deleted"
            }, status: :unprocessable_entity
        end
    end

    private 
    def product_params
        params.require(:product).permit(:name, :price, :user, :product_id, :amount)
    end
end
