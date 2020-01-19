class Api::AddressesController < ApplicationController

  before_action :set_location

  def index
    render json: @location.addresses
  end

  def create
    @address = @location.addresses.new(address_params)
    if @address.save
      render json: @address
    else
      render json: {errors: @address.errors}, status: :unproccessable_entity
    end
  end

  def update
    @address = @location.addresses
    if @address.update(address_params)
      render json: @address
    else
      render json: {errors: @address.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @location.addresses.destroy
    render json: {message: 'Address has been wrecked, bro'}
  end

  private

  def set_location
    @location = Location.find(params[:location_id])
  end

  def address_params
    params.require(:address).permit(:street, :city, :state, :zip)
  end
end
