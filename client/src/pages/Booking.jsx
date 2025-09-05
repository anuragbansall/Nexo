import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const locationSuggestions = [
  {
    id: 1,
    name: "New York, NY",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: "Los Angeles, CA",
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: "Chicago, IL",
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
  {
    id: 4,
    name: "Houston, TX",
    coordinates: { lat: 29.7604, lng: -95.3698 },
  },
  {
    id: 5,
    name: "Phoenix, AZ",
    coordinates: { lat: 33.4484, lng: -112.074 },
  },
];

const rideOptions = [
  {
    id: 1,
    name: "Uber Go",
    capacity: 4,
    totalFare: 195,
    distanceAway: "2 min",
    description: "Affordable rides for everyday travel",
    image:
      "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-128.jpg",
  },
  {
    id: 2,
    name: "Moto",
    capacity: 1,
    totalFare: 95,
    distanceAway: "2 min",
    description: "Affordable rides for everyday travel",
    image:
      "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-128.jpg",
  },
  {
    id: 3,
    name: "Uber Auto",
    capacity: 3,
    totalFare: 155,
    distanceAway: "3 min",
    description: "Affordable rides for everyday travel",
    image:
      "https://img.freepik.com/free-vector/isometric-car-icon-isolated-white_107791-128.jpg",
  },
];

function Booking() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState(null);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const [activeInput, setActiveInput] = useState(null); // "pickup" or "destination"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickup.trim() || !destination.trim()) {
      setError("Please fill in all fields");
      return;
    }

    // Simulate booking submission
    console.log("Booking submitted:", { pickup, destination });

    // Reset form
    setPickup("");
    setDestination("");
    setError(null);
    setIsSuggestionVisible(false);
    setActiveInput(null);
  };

  useEffect(() => {
    const showSuggestions = () => {
      if (
        (activeInput === "pickup" && pickup.trim()) ||
        (activeInput === "destination" && destination.trim())
      ) {
        setIsSuggestionVisible(true);
      } else {
        setIsSuggestionVisible(false);
      }
    };

    showSuggestions();
  }, [pickup, destination, activeInput]);

  const handleSuggestionClick = (locationName) => {
    if (activeInput === "pickup") {
      setPickup(locationName);
    } else if (activeInput === "destination") {
      setDestination(locationName);
    }

    setIsSuggestionVisible(false);
    setActiveInput(null);
  };

  return (
    <main className="relative flex h-screen w-screen flex-col">
      <Navbar />

      {/* Map */}
      <div className="map h-full w-full bg-gray-200">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Booking Form */}
      <div
        className={`absolute bottom-0 left-1/2 flex w-full max-w-full -translate-x-1/2 flex-col items-center gap-3 bg-white p-6 md:rounded-t-2xl ${isSuggestionVisible ? "h-full w-screen" : "md:w-2xl"} ${!isSuggestionVisible && "max-h-[25rem]"} overflow-y-auto`}
      >
        <form className="mt-4 w-full space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl font-semibold">Find a trip 🗾</h2>
          <input
            type="text"
            id="pickup"
            autoComplete="off"
            className="input bg-neutral-100 focus:bg-white"
            placeholder="Enter pickup location"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setActiveInput("pickup")}
          />

          <input
            type="text"
            id="destination"
            autoComplete="off"
            className="input bg-neutral-100 focus:bg-white"
            placeholder="Enter destination"
            required
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={() => setActiveInput("destination")}
          />

          {error && <p className="text-red-500">{error}</p>}
        </form>

        {/* Suggestions */}
        {isSuggestionVisible && (
          <ul className="mt-6 w-full">
            {locationSuggestions.map((location) => (
              <li
                key={location.id}
                className="w-full cursor-pointer p-3 font-medium hover:bg-gray-100"
                onClick={() => handleSuggestionClick(location.name)}
              >
                {location.name}
              </li>
            ))}
          </ul>
        )}

        {/* Ride Options */}
        {pickup.trim() && destination.trim() && !isSuggestionVisible && (
          <div className="mt-6 w-full">
            <h3 className="mb-4 text-2xl font-semibold">Select a ride</h3>
            <div className="space-y-4">
              {rideOptions.map((ride) => (
                <div
                  key={ride.id}
                  className="flex cursor-pointer items-center gap-4 rounded-md border-b border-neutral-200 p-4 transition duration-200 ease-in-out hover:bg-neutral-200"
                >
                  <img
                    src={ride.image}
                    alt={ride.name}
                    className="h-16 w-16 rounded-lg object-contain"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {ride.name}
                      <span className="ml-4 text-lg">{ride.capacity}</span>
                    </h2>
                    <p className="text-sm text-gray-500">
                      {ride.distanceAway} away
                    </p>
                    <p className="text-sm text-gray-500">{ride.description}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <h3 className="text-xl font-semibold">
                      Rs. {ride.totalFare}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Booking;
