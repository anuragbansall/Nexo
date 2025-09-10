import React, { useState } from "react";
import Navbar from "../components/Navbar";

const rideRequests = [
  {
    id: 1,
    pickup: "New York, NY",
    destination: "Los Angeles, CA",
    fare: 195,
    rider: "John Doe",
    distance: "2 km",
    time: "2 min ago",
  },
  {
    id: 2,
    pickup: "Chicago, IL",
    destination: "Houston, TX",
    fare: 155,
    rider: "Jane Smith",
    distance: "5 km",
    time: "5 min ago",
  },
  {
    id: 3,
    pickup: "Phoenix, AZ",
    destination: "New York, NY",
    fare: 210,
    rider: "Alex Brown",
    distance: "3 km",
    time: "1 min ago",
  },
];

function Captain() {
  const [requests, setRequests] = useState(rideRequests);
  const [currentRide, setCurrentRide] = useState(null);
  const [declinedIds, setDeclinedIds] = useState([]);

  const handleAccept = (ride) => {
    setCurrentRide(ride);
    setRequests(requests.filter((r) => r.id !== ride.id));
  };

  const handleDecline = (id) => {
    setDeclinedIds([...declinedIds, id]);
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <main className="relative flex h-screen w-screen flex-col">
      <Navbar />

      {/* Map Background */}
      <div className="map h-full w-full bg-gray-200">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Map"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Captain UI */}
      <div
        className={`absolute bottom-0 left-1/2 flex max-h-[20rem] w-full max-w-full -translate-x-1/2 flex-col items-center gap-3 overflow-y-auto bg-white p-6 md:w-2xl md:rounded-t-2xl`}
      >
        <h2 className="mb-4 text-center text-3xl font-semibold">
          Ride Requests 🚗
        </h2>

        {/* Show current ride if accepted */}
        {currentRide ? (
          <div className="w-full rounded-lg border border-neutral-200 bg-neutral-100 p-4">
            <h3 className="mb-2 text-2xl font-bold">Current Ride</h3>
            <div className="mb-2">
              <span className="font-semibold">Rider:</span> {currentRide.rider}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Pickup:</span>{" "}
              {currentRide.pickup}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Destination:</span>{" "}
              {currentRide.destination}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Fare:</span> Rs.{" "}
              {currentRide.fare}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Distance:</span>{" "}
              {currentRide.distance}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Requested:</span>{" "}
              {currentRide.time}
            </div>
            <button
              className="dark-btn mt-4 w-full bg-black text-white hover:bg-gray-800"
              onClick={() => setCurrentRide(null)}
            >
              Complete Ride
            </button>
          </div>
        ) : (
          <>
            {requests.length === 0 ? (
              <div className="text-center text-lg text-gray-500">
                No ride requests available.
              </div>
            ) : (
              <ul className="w-full space-y-4">
                {requests.map((ride) => (
                  <li
                    key={ride.id}
                    className="flex flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 shadow-sm md:flex-row"
                  >
                    <div className="flex-1">
                      <div className="mb-1 text-xl font-semibold">
                        {ride.rider}
                      </div>
                      <div className="mb-1 text-gray-700">
                        Pickup: {ride.pickup}
                      </div>
                      <div className="mb-1 text-gray-700">
                        Destination: {ride.destination}
                      </div>
                      <div className="mb-1 text-gray-700">
                        Fare: Rs. {ride.fare}
                      </div>
                      <div className="text-sm text-gray-500">
                        {ride.distance} away • {ride.time}
                      </div>
                    </div>
                    <div className="flex gap-2 md:ml-4 md:flex-col">
                      <button
                        className="dark-btn"
                        onClick={() => handleAccept(ride)}
                      >
                        Accept
                      </button>
                      <button
                        className="light-btn"
                        onClick={() => handleDecline(ride.id)}
                      >
                        Decline
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Captain;
