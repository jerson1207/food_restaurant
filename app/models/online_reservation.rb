class OnlineReservation < ApplicationRecord
  has_many :tickets
  enum status: { pending: 'pending', confirmed: 'confirmed', canceled: 'canceled' }
  after_create :set_status_pending
  
  private

  def set_status_pending
    self.update(status: :pending)
  end
end
