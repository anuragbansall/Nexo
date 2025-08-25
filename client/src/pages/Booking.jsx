import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const locationSuggestions = [
  {
    id: 1,
    name: "New York, NY",
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  {
    id: 2,
    name: "Los Angeles, CA",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
  },
  {
    id: 3,
    name: "Chicago, IL",
    coordinates: {
      lat: 41.8781,
      lng: -87.6298,
    },
  },
  {
    id: 4,
    name: "Houston, TX",
    coordinates: {
      lat: 29.7604,
      lng: -95.3698,
    },
  },
  {
    id: 5,
    name: "Phoenix, AZ",
    coordinates: {
      lat: 33.4484,
      lng: -112.074,
    },
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

    // TODO: Submit booking data to the server
    console.log("Booking submitted:", { pickup, destination });

    setPickup("");
    setDestination("");
    setError(null);
  };

  useEffect(() => {
    if (pickup.trim() || destination.trim()) {
      setIsSuggestionVisible(true);
    } else {
      setIsSuggestionVisible(false);
    }
  }, [pickup, destination]);

  return (
    <main className="relative flex h-screen w-screen flex-col">
      <Navbar />
      {/* map */}
      <div className="map h-full w-full bg-gray-200">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Booking form goes here */}
      <div
        className={`absolute bottom-0 left-1/2 flex w-full max-w-full -translate-x-1/2 flex-col items-center gap-3 bg-white p-6 md:rounded-t-2xl ${isSuggestionVisible ? "h-full w-screen" : "md:w-2xl"}`}
      >
        <h2 className="text-3xl font-semibold">Find a trip 🗾</h2>

        <form className="mt-4 w-full space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            id="pickup"
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
            className="input bg-neutral-100 focus:bg-white"
            placeholder="Enter destination"
            required
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={() => setActiveInput("destination")}
          />

          {error && <p className="text-red-500">{error}</p>}
        </form>

        {isSuggestionVisible && (
          <ul className="mt-6 w-full">
            {locationSuggestions.map((location) => (
              <li
                key={location.id}
                className="w-full cursor-pointer p-3 font-medium hover:bg-gray-100"
                onClick={() => {
                  if (activeInput === "pickup") {
                    setPickup(location.name);
                  } else if (activeInput === "destination") {
                    setDestination(location.name);
                  }

                  setIsSuggestionVisible(false);
                }}
              >
                {location.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Booking;
