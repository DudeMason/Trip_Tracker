class Api::sController < ApplicationController

  before_action :set_trip

  def index
    render json: @trip.locations
  end

  def create
    @location = @trip.locations.new(location_params)
    if @location.save
      render json: @location
    else
      render json: {errors: @location.errors}, status: :unproccessable_entity
    end
  end

  def update
    @location = @trip.locations.find(params[:id])
    if @location.update(location_params)
      render json: @location
    else
      render json: {errors: @location.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @trip.locations.find(params[:id]).destroy
    render json: {message: 'Location has been wrecked, bro'}
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def location_params
    params.require(:location).permit(:name, :days)
  end
end
