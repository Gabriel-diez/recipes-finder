require 'test_helper'

class Api::V1::RecipeControllerTest < ActionDispatch::IntegrationTest
    test "should get one recipe with one params" do
        get api_v1_recipe_search_url, params: { :ingredients => 'poulet' }
        json_response  = JSON.parse(response.body)
        assert_equal 1, json_response.length
    end

    test "should get specific recipe with one params" do
        get api_v1_recipe_search_url, params: { :ingredients => 'poulet' }
        json_response  = JSON.parse(response.body)
        assert_equal "Poulet frit à la basquaise", json_response.first['name']
    end

    test "should get multiple recipes with one params" do
        get api_v1_recipe_search_url, params: { :ingredients => 'beurre' }
        json_response  = JSON.parse(response.body)
        assert_equal 3, json_response.length
    end

    test "should get one recipe with multiple params" do
        get api_v1_recipe_search_url, params: { :ingredients => 'beurre,poulet' }
        json_response  = JSON.parse(response.body)
        assert_equal 1, json_response.length
    end

    test "should get multiple recipes with multiple params" do
        get api_v1_recipe_search_url, params: { :ingredients => 'beurre,cornichon' }
        json_response  = JSON.parse(response.body)
        assert_equal 2, json_response.length
    end
end
