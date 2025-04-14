import { useState } from "react";

export default function Home() {
  const [islightsOn, setIsLightOn] = useState(true);

  const handleLightToggle = () => {
    setIsLightOn(!islightsOn);
  };
  const getbuttonConfig = () => ({
    text: islightsOn ? "turn Off Lights" : "The lights on",
    bgColor: islightsOn ? "bg-green-500" : "bg-red-500",
  });
  const buttonConfig = getbuttonConfig();
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        islightsOn ? "bg-white" : "bg-grey-900"
      }`}
    >
      <h1 className="text-4xl mb-8">Light Switch App</h1>

      <div className="text-white py-4" onClick={handleLightToggle}>
        {buttonConfig.text}
      </div>
    </div>
  );
}
