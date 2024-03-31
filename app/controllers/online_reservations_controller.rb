# app/controllers/online_reservations_controller.rb
class OnlineReservationsController < ApplicationController
  before_action :set_online_reservation, only: [:show]

  def search
    if params[:ticket_id].present?
      @ticket_id = params[:ticket_id]

      if OnlineReservation.find(@ticket_id).present?
        redirect_to online_reservation_path(@ticket_id)
        return # Ensure to exit the action after redirection
      else
        flash[:alert] = "Ticket not found"
      end
    else
      flash[:alert] = "Please enter a ticket ID"
    end
  end

  def new
    @online_reservation = OnlineReservation.new
  end

  def create
    @online_reservation = OnlineReservation.new(online_reservation_params)
    if @online_reservation.save
      redirect_to online_reservation_path(@online_reservation), notice: 'Online reservation was successfully created.'
    else
      flash[:alert] = 'Failed to create online reservation.'
      redirect_to root_path
    end
  end

  def show
    # unless request.referrer && URI(request.referrer).path == search_ticket_path
    #   flash[:alert] = "Access denied."
    #   redirect_to search_ticket_path
    # end
  end

  private

  def set_online_reservation
    @online_reservation = OnlineReservation.find(params[:id])
  end

  def online_reservation_params
    params.require(:online_reservation).permit(:name, :phone_number, :pax, :date, :time, :message)
  end
end
