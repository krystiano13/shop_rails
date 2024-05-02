require "test_helper"

class ProductControllerTest < ActionDispatch::IntegrationTest
  test "should get user's products" do
    @products = Product.where(user: users(:one).email)
    assert @products.present?
  end

  test "should create product" do
    data = {
      :name => products(:one).name,
      :price => products(:one).price,
      :user => products(:one).user,
      :product_id => products(:one).product_id,
      :amount => products(:one).amount
    }

    product = Product.new(data)
    assert product.save!
  end

  test "should update product" do
    data = {
      :name => products(:one).name,
      :price => products(:one).price + 2.25,
      :user => products(:one).user,
      :product_id => products(:one).product_id,
      :amount => products(:one).amount + 1
    }

    product = Product.find(products(:one).id)
    assert product.update(data)
  end

  test "should destroy product" do
    id = products(:two).id
    assert Product.destroy(id)
  end
end
