class AdminController < ApplicationController
  layout 'admin'
  def index
    @online_reservations = OnlineReservation.all
    @pending_count = @online_reservations.where(status: "pending").count
    @confirmed_count = @online_reservations.where(status: "confirmed").count
    @canceled_count = @online_reservations.where(status: "canceled").count
  end
end