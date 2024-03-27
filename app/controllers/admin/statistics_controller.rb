class Admin::StatisticsController < AdminController
  def index
    @online_reservations = OnlineReservation.all.group_by(&:date).map { |date, reservations| [date, reservations.count] }
  end
end
