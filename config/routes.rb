Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :update, :destroy]
  resources :books, only: [:index, :show, :create, :update]
  # resources :readers

  post "/signup", to: "readers#create"
  get "/me", to: "readers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"



  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end

  # Defines the root path route ("/")
  # root "articles#index"
