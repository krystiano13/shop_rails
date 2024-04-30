class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false  
  before_action :authenticate_devise_api_token!

  def index
    @orders = Order.all

    if @orders.present?
        render json: {
            orders: @orders
        }
    else
        render json: {
            orders: Array.new
        }
    end
  end

  def create
    @order = Order.new(order_params)

    if @order.save
        render json: {
            message: "Order created successfully",
        }
    else
        render json: {
            message: "Order not created",
        }
    end
  end

  def accept
    @orders = OrderedProduct.find_by(order_id: params[:id])

    if @orders.present?
        @orders.update(accept: true)
    else
        render json: {
            error: "Order not found"
        }
    end
  end

  private
  def order_params
    params.require(:order).permit(:name, :amount, :order_id, :price, :adress, :postal_code, :person_name, :accept)
  end
end
