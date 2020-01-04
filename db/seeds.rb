
5.times do
  @trip = Trip.create(
    name: Faker::GreekPhilosophers.name,
    end_date: Faker::Date.between_except(from: 1.day.ago, to: 1.year.from_now, excepted: Date.today),
    start_date: Faker::Date.between_except(from: 1.year.ago, to: 1.day.from_now, excepted: Date.today)
  )

  3.times do
    @location = Location.create(
      name: Faker::Movies::LordOfTheRings.location,
      days: Faker::Number.number(digits: 1),
      trip_id: @trip.id
  )
      Address.create(
        street: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state ,
        zip: Faker::Address.zip,
        location_id: @location.id
      )
  end
end

puts 'Data Seeded'
