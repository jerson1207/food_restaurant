class AddStatusToOnlineReservations < ActiveRecord::Migration[7.1]
  def change
    add_column :online_reservations, :status, :string
  end
end
