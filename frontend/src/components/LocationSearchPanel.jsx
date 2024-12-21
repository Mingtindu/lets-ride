import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  //sample array for location

  const locations = [
    {
      name: "24B Near Mingtindu's cafe, Gokarneshwor-8-Attarkhel",
    },
    {
      name: "24B Near Mingtindu's cafe, Gokarneshwor-8-Attarkhel",
    },
    {
      name: "24B Near Mingtindu's cafe, Gokarneshwor-8-Attarkhel",
    },
  ];
  return (
    <div>
      {locations.map((item, index) => {
        return (
          <div
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            key={index}
            className="flex gap-4 active:border-2 border-black rounded-xl items-center my-4 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
