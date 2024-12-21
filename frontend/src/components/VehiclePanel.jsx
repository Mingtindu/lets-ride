import React from "react";

const VehiclePanel = ({ setConfirmRidePanel, setVehiclePanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="relative text-3xl"
      >
        <i className="ri-arrow-down-wide-line absolute right-3 top-1"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex items-center justify-center bg-gray-100 mb-2 active:border-2 border-black rounded-xl p-3 w-full"
      >
        <img
          className="h-10"
          src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            Car
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs 200.25</h2>
        <h2></h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex items-center justify-center mb-2 bg-gray-100 active:border-2 border-black  rounded-xl p-3 w-full"
      >
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbJM0-gQ837Dz0sT-JfKtAiiBL0biDx7vcQ&s"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            Auto
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">6 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs 150.25</h2>
        <h2></h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex items-center justify-center mb-2 bg-gray-100 active:border-2 border-black  rounded-xl p-3 w-full"
      >
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/010/946/182/small/big-bike-sport-motorcycle-fast-speed-modern-style-white-blue-red-color-illustrator-png.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-lg">
            Motorbike
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">7 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorbike rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs 140.25</h2>
        <h2></h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
