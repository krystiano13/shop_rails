class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false  
  before_action :authenticate_devise_api_token!

  def index
    @orders = OrdereredProduct.all

    if @orders.present?
        render json: {
            orders: @orders
        }, status: :ok
    else
        render json: {
            orders: Array.new
        }, status: :unprocessable_entity
    end
  end

  def create
    @order = OrderedProduct.new(order_params)
    Product.where(user: params[:user]).destroy_all

    if @order.save      
        render json: {
            message: "Order created successfully",
        }, status: :ok
    else
        render json: {
            message: "Order not created",
        }, status: :unprocessable_entity
    end
  end

  def accept
    @orders = OrderedProduct.find_by(id: params[:id])

    if @orders.present?
        @orders.update(accept: true)

        render json: {
            message: "Order accepted successfully",
        }, status: :ok
    else
        render json: {
            error: "Order not found"
        }, status: :unprocessable_entity
    end
  end

  private
  def order_params
    params.require(:order).permit(:products, :price, :adress, :postal_code, :person_name, :accept)
  end
end
