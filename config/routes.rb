Rails.application.routes.draw do
  root 'recipe#index'

  namespace :api do
    namespace :v1 do
      get 'recipe/search', to: 'recipe#search'
    end
  end
end
