class DropTickets < ActiveRecord::Migration[7.1]
  def change
    if table_exists?(:tickets)
      drop_table :tickets
    end
  end
end
