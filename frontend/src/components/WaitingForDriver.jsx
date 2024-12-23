import React from "react";

const WaitingForDriver = ({ setWaitingForDriver }) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          setWaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-10" src="" alt="" />
        <div className="text-right">
          <h2 className="text-lg font-medium">Ram</h2>
          <h4 className="text-xl font-semibold">BA 2021-05</h4>
          <p className="text-sm text-gray-600">Maruti suzuki ALto</p>
        </div>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Gokarneshwor-8, Jorpati
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Gokarneshwor-8, Jorpati
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3  " p-3 border-b-2>
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs 195.55</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
