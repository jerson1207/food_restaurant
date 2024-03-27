class CreateOnlineReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :online_reservations do |t|
      t.string :name
      t.string :phone_number
      t.integer :pax
      t.date :date
      t.time :time
      t.text :message

      t.timestamps
    end
  end
end
