Rails.application.routes.draw do
  devise_for :admins
  namespace :admin do
    resources :statistics, only: [:index]
  end

  get 'admin/index'
  root 'pages#index'
  resources :online_reservations, only: [:new, :create, :show]
  get 'search_ticket', to: 'online_reservations#search', as: "search_ticket"

  authenticated :admin_user do
    root to: 'admin#index', as: :root_admin
  end
  
  get 'admin' => 'admin#index'




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up              that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
