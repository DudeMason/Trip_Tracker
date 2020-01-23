Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do

    resources :users do
      resources :trips
    end
    resources :trips do
      resources :locations
    end
    resources :locations do
      resources :addresses
    end
  end
  
  get '*other', to: 'static#index'
end
