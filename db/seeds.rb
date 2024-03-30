admin = Admin.new(email: "admin@test.com", password: "qwerty", password_confirmation: "qwerty")
if admin.save
  puts "admin@test.com has been created"
end