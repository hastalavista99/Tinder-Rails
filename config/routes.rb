Rails.application.routes.draw do
  devise_for :accounts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "/browse" => "browse#browse", as: :browse
  get "/matches" => "browse#matches", as: :matches
  post "/approve/:id" => "browser#approve", as: :approve_user
  post "/decline/:id" => "browser#decline", as: :decline_user


  root to: "public#home"

  # Defines the root path route ("/")
  # root "articles#index"
end
