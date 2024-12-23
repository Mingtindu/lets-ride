import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelCloseRef = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      console.log("inside pannel");

      if (panelOpen) {
        gsap.to(panelRef.current, {
          display: "block",
          height: "70%",
          opacity: 1,
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          onComplete: () => {
            gsap.set(panelRef.current, { display: "none" });
          },
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (ConfirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAACFCAMAAACND6jkAAAAe1BMVEX///8AAACFhYXs7OzFxcXh4eHKysr5+fnR0dE/Pz81NTWXl5fw8PDT09Pe3t5/f3+dnZ0XFxe5ubmoqKi0tLRubm7u7u5aWlovLy92dnYmJiavr69mZmaioqKPj49RUVFJSUkdHR1CQkIRERFoaGhVVVUwMDBfX1+CgoLUZONEAAAK6ElEQVR4nO2d2VrjMAyFS7d0B1pKF6DLwEzn/Z9wWiBk8ZEtSy4O3/hcNont/E1sWZaVVisp6b/UjalZ8BI7lRNujeNrXY0/VYBUL3iJVfZt4/hQV+NPVWIfT4l9PCX28ZTYx1NiH0+JfTwl9vGU2MdTYh9PiX08JfbxlNjHU2IfT4l9PCX28ZTYx1NiH0+JfTwl9vGU2MdTYh9PiX08JfbxlNjHU2IfT4l9PCX28ZTYx1NiH0+JfTw1n33WmU0Hg+msk+naxVA2mVy/kkJNZj/pjp/X5fPWz+NuB5+rUm8+Xv76quX1sBzPlRBYaiz77u09KOmi5cNE18KKZne/cTWrFw8Qk/6grtoZ05fN4TUve/f+UzPZ95cE90/9WoTpG6Z/rdW87rj7n7rmxeXD81P12Pj9V1BjbPbZnRXIp96mumae9XJ0V7N+YhVlsr8vDo6Ngw1ln5mHCY26mmZO2PWMGaVZ2C/IIsGBqOx3XCIXbfvSRvL/4YvunOWR7B9HqMAmsp/7ELnoIDN70LNolesVo9iDceCi5rHPCIvDqp1/C3t//Ks52Qd3gj31HzeOPfGMuLT1bS9rKDdl7d8w+xeqrKax9+qBK1r4NC87SKtpW0qF7OketGHsxUjOeuO3bqaoZk8Xi9hbqmoU+8mRTQBpxJ1qCfu1T23JasxyjwhErgaxP2Ts26f0yGqbt31TF+XNMNmPbH1og9iPKNeNhzjGpnCULYuA7/k+NYh9ELnhk2aHh15xt/Ofsyf7g1wPQWoZ/Tfsn8fzQa/z2OlN53fLV/u5R3u7BrZrh7v57OO/m8zmu6G1Sf8D+9VTvRt5fDjZLjjYmvVIX7d/qHck2dwyxX4BpXuyb5D/HuiV8NBniyN9kW32s6Uu+osHike6mcCp72Z/frOmvc6nJhSpBrDfzi0VdEmMFpfXhrhiQ88MMjOx24deQZvs97N+QtWAE+Ozd61X0KMmRZJgs7WvS/XW+DLz/bKyp1zd4NTY7J8Zk9Q34toVv1Fn3TrrIdpqILKxJ73/nIL9BEr0Ym/rbgpRfip8NV7+5dSE6zEWmC3s6VcLnByXPbf2HnE9OncKz+Qt+OJr6wMLzd4y61DcPb9EPnvaW2Uow0MuWkuB63bcEATojryvnUSyt034wOkR2f/xqgkvP5l3C8Hwwxzgk1/rryj21j8YnB+PvWNmauiICjEHUPSCPHhU8wSu31ZPIdjbV3XABfHY+8abTVilIC4br3rQ5KBqN2L2jhhfcEU09v7RTrA7qPf4wDvj+4IBT9KpcgJm7xhSGsTeHQVjygz5uqmbOmis9E11jvxwldcLsj9RxX2qOexlQfjIhKmOg8Az4NfjXPRsFlLpyyF71z/cHPayKCdk5h9c7fEPpAVe0Mqzgtg7s/o3hr3NB2kTcniVuwNARVIVGG4dtUBfc0WNYS8N6kbL7OXuALgTJOH74P0qm6mIvZNjU9gLQvvo4sqBNOZRj2iekvZGOcvSUcTeWWRT2Mv3MiAjvzgKrND6jhCegFOtdBSwd//FDWEvexY/BNYRi4kPCAsJdl+l2wLs3SZzQ9iLA+lb8L6L7Qor45jbaY9lllSyZUEb3DszGsI+cI2/Lcekf7MZ01YaowB79/ytGeyXRFk8gYlPfqhjHupOjS2BHE1Nj1pp3grYu+crzWDv41U0BfyMuRnZB60JppJXCLB3Ww+gyAjsdVUCj01uy6iDX60qmvCD2etqBFXmL9K14g8/VEzSfi57bS4LM5QjN/CoeIYwKobTn8teN9SiwTZ32Ziz0ZAqZmk/l73coUCVmP+bRHBTIBUm/M9lL1k1KctcQcnNvwCbKiwqJleh2F/7+7Ume6+NgkDmpoY8Ps2fp48K0zgUe12SCOTTvTZ705L8EezBKrAqRQSaSabnHgsMRrysJZRQ6EC8/v7ozdNHSvZgSzEnZwktFDx6bTvHzECUr4Zbd++opWQP/FA6axvto7y2fW968HP7XpIdgy8le5C0yrm+bhUKt3bur1XViIL+8l6M2m4SRkXvLGKPHlMVB2RRf78/J7e8zVRI+0E/lEo5C0XsUfesMTJhiOT3+zHzWzDdy2CzVACJ2KOIOY3ZAfdpONnrTCvgKM49jCCYL2SCxy+J2CML+KBoBOxgnezhfmG2zJXUr04MvIa8PUWekrFHwemK5JMI/fev154sx/yDMRmSsUcPqrwLwGt0bvaauTTo5opeEzjwFVWRkrFHmyrkaxlgusBi7wqXtglMDwtrAYwFOp8Jlow93K8ndWXijSCcuDT5CIhuwHr0N12WWDL2sIeWTjRZ4d3wJGkYMuw0y2+RszlBJGQPswbImkel3rpmHDLKD1IOOQG3p3VhAAnZwy0TMqOPmsFz2EvNDzTClG8bjf7hH3whe2wWSua2ZFJC1r4T2RiDXNbVgRucEL7Hl7KHT6vvTryLyNwqLPYyFx7KJVU1ZFB26+CmjpQ9zhjgH65LxyHx9hlKvPjwuameghbSRKPLynKRlD3xvPo+G5ZUGsz9tf4RwtB7VN/nBFwOthSvlFa2BorZo+nVja9zkcrr4cHeewzEddbPYm2Aduq91aQlLGZPrSj7zHeIWZUfe8+uANdpLnn+Qqd5hj5/LseP+LlJmfdCJe3kw7ei57M/+sAn6jRP5KXAsWrhuEzOngyl0CYS+hQ/f84r/++GYyiON0E9vpczuby6B40QBXuix9cm0MrlkzeKa+YTqUa36FwiN6Zz83Gu6tx4DYYlBXs6ZpQz3XR8jMozXxovUAomsbih/jribJ5zITPGC/OJ1LC35Mn3/8yKIb88gXt3v/MIh8+z/hIXENO+e8Zbhl5q40/TsEexIrkONv/ClKJQlm9+TFdnQD309GycHJBcU8gOjvA51v40FfvW0cJiSHX7c17cl39OXtvKmWUPFW0b0BfZIgMmVGrY+jRLx95hqmy6Rr7mLjvwSJKLeownWh3ymb+x2+x4Re1dbeIvG9A7hupvpo69Oz38dvPSnfYeJ5POrLvY+HwjSpYHfPhS741nL9b3zN5/2LagjO7qVWVd22cmDQtEyR4vogSRPP/9vr3oTme92bT7tHPFVjo8w65vqnxV1X8YL+l01++nGoVr2V8vcPRbvvvgXOAnJmNBalKzx46PAPoO9oy0po4hjSsUuatnHyJc/RZsq3Sxf7O/4hyxwlqCwIc1BWCv+rrauzbo/3Oxb7eOymqZ/viJ45MpDOFRJQR77UbsHXx3XOxvtW8cf6Fd260StlQQ9vSckaOLgS1jr/rTffbK6aw5agYRhr0m7cm7kSxkr0j54RfhoPik4T05bw7EvpUJkxB8hmZI2bd6sk3g3pFOok8UF82ECsXe4s63Kff5iNnLrE9JCi7vT3NfdLS5FMOxb2Xee8SKbxUp2Ld6vkOudD+q1yfp32UfUwKyP1PA62yE9qWOUMP+fBNHj2pv5feX+b1jrrCGoOxbrRnb8lhV3kYd+3OHwJ1otXU7pzK+RefegBaY/Xkmwmpdu+bs1bI/W1rWrxZ+aK3NwXBRl/NyrzgBDcHZnzWweVLPejMbtvozqulY/ajybl07vjbe6GxhnQNtx8ocP0VF9q9T3qzgx/BM9bf1m75Xsz+rtyCWHX7tZJmFeZrMN9jmXBqf91Rqeof5r8bXvD+2Jv1F+zTMnSHbw3I8V2Y44lU7WPw9fX3ZYXhqL/pX2R17rmn6ML593g9H69Fw/3w7fhhcqaKkBugfk2yW9ZWtMUIAAAAASUVORK5CYII="
        alt=""
      />
      <div
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="h-screen w-screen"
      >
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://images.prismic.io/superpupertest/75d32275-bd15-4567-a75f-76c4110c6105_1*mleHgMCGD-A1XXa2XvkiWg.png?auto=compress,format&w=1966&h=1068"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end absolute bottom-0 w-full  h-screen">
        <div className="h-[30%] p-6 bg-white relative ">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 opacity-0 text-2xl right-6"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            action=""
          >
            <input
              className="bg-[#eeee] px-12 py-2 text-base w-full rounded-lg mt-2"
              type="text"
              placeholder="Add a pick-up location "
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-4"
              type="text"
              placeholder="Enter your destination "
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
          <div className="line  absolute h-16 w-1 left-10 top-[35%] bg-gray-900 rounded-full"></div>
        </div>
        <div ref={panelRef} className=" opacity-0 bg-white p-5 h-0 ">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 pt-12 translate-y-full"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        ></VehiclePanel>
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <ConfirmRide
          setVehicleFound={setVehicleFound}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        ></ConfirmRide>
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound}></LookingForDriver>
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <WaitingForDriver
          setWaitingForDriver={setWaitingForDriver}
        ></WaitingForDriver>
      </div>
    </div>
  );
};

export default Home;
