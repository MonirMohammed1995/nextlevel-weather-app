import { X } from "lucide-react";

const LocationModal = ({onClose}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[300px] w-[400px] bg-gray-100 shadow-2xl rounded-2xl">
        <div className="flex justify-between items-center p-3">
          <h2 className="text-xl font-medium">Where are you Today</h2>
          <button onClick={onClose} className="w-10 h-10 rounded-full p-2 bg-gray-300 cursor-pointer">
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
