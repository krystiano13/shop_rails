require "test_helper"

class OrdersControllerTest < ActionDispatch::IntegrationTest
  test "Are orders avalible" do
    @orders = OrderedProduct.all
    assert @orders.present?
  end

  test "Are orders created" do
    data = {
      :products => ordered_products(:one).products,
      :price => ordered_products(:one).price,
      :adress => ordered_products(:one).adress,
      :postal_code => ordered_products(:one).postal_code,
      :person_name => ordered_products(:one).person_name,
      :accept => false
    }
    @order = OrderedProduct.new(data)
    assert @order.save!
  end

  test "Are orders accepted" do
    @orders = OrderedProduct.all
    assert @orders.update(accept: true)
  end
end
