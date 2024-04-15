# Food Restaurant
###### This project is for practice purposes
## To get started with this project, follow the steps below:
### Prerequisites
Make sure you have the following installed on your system:
- ruby 3.3.0 
- Rails 7.1.3.2
- Bundler version 2.5.6
- Clone the Repository

### Clone the Repository
```
git clone https://github.com/jerson1207/food_restaurant.git
cd [repository project]
```

## Install Dependencies
```
bundle install
```
## Database Setup
Make sure you have a database configured in config/database.yml. Then run the following commands:
```
rails db:create
rails db:migrate
```

## Seed the Database
```
rails db:seed
```

## Start PostgreSQL Service
```
sudo service postgresql start
```

## Start website
```
ben/dev
```

---

## Accessing the Admin Panel

To access the admin panel, follow these steps:

1. Open your web browser.
2. Navigate to `http://localhost:[port]/admin`, where `[port]` is the port number your Rails server is running on.
3. You will be prompted to log in with your admin credentials.
   - **Email:** admin@test.com
   - **Password:** qwerty
---
**_NOTE:_**
If you want to set up another admin, you may need to create an admin user. To create an admin user
- Open your terminal.
- Navigate to your Rails application directory.
- Run the Rails console by typing `rails console` and pressing Enter.
- In the Rails console, execute the following command to create an admin user:
  ```ruby
  AdminUser.create!(email: 'yourmail@test.com', password: 'yourpassword')
  ```
  ---

  
















