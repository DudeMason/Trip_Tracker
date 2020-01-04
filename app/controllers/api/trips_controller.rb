class Api::TripsController < ApplicationController

  def index
    render json: Trip.all
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip
    else
      render json: {errors: @trip.errors}, status: :unproccessable_entity
    end
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: {errors: @trip.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    Trip.find(params[:id]).destroy
    render json: {message: 'Trip has been wrecked, bro'}
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :start_date, :end_date)
  end
end
