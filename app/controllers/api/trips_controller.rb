class Api::TripsController < ApplicationController

	before_action :set_user

	def index
		render json: @user.trips.all
	end

	def create
		@trip = @user.trips.new(trip_params)
		if @trip.save
			render json: @trip
		else render json: {errors: @trip.errors}, status: :unproccessable_entity
		end
	end

	def update
		@trip = @user.trips.find(params[:id])
		if @trip.update(trip_params)
			render json: @trip
		else render json: {errors: @trip.errors}, status: :unproccessable_entity
		end
	end

	def destroy
		@user.trips.find(params[:id]).destroy
		render json: {message: 'Trip has been wrecked, bro'}
	end

	private

		def set_user
			@user = User.find(params[:user_id])
		end

		def trip_params
			params.require(:trip).permit(:name, :start_date, :end_date)
		end
end
