import { useEffect, useState } from "react";
import CleaningType from "../../Components/UI/CleaningType";
import RoomCountSelector from "../../Components/UI/RoomCountSelector";
import CleaningFrequencySelector from "../../Components/UI/CleaningFrequencySelector";
import KotitalousVahennysCard from "../../Components/UI/KotitalousVahennysCard";
import FinalPriceCard from "../../Components/UI/FinalPriceCard";
import PriceCalculatorButton from "../../Components/UI/PriceCalculatorButton";
import {
  calculatePrice,
  getFrequencyOptions,
  getUnitLabel,
  ROOM_OPTIONS,
  type CleaningFrequency,
  type RoomValue,
} from "@/data/pricing";
import type { serviceId } from "@/data/services";

const CalculateLeft = () => {
  const [selectedService, setSelectedService] = useState<serviceId | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<RoomValue | null>(null);
  const [selectedFrequency, setSelectedFrequency] = useState<CleaningFrequency | null>(null);

  const frequencyOptions = getFrequencyOptions(selectedService);
  const total = calculatePrice(
    selectedService,
    selectedRooms,
    selectedFrequency,
  );
  const unitLabel = getUnitLabel(selectedService, selectedFrequency);

  useEffect(() => {
    if (!selectedService) {
      setSelectedFrequency(null);
      return;
    }

    setSelectedFrequency((current) => {
      if (current && frequencyOptions.includes(current)) {
        return current;
      }

      return frequencyOptions[0] ?? null;
    });
  }, [selectedService, frequencyOptions]);

  return (
    <div
      id="price-calculator"
      className="scroll-mt-13 flex flex-col gap-4 mt-13 md:mt-33 lg:flex-row lg:items-start lg:gap-6 justify-center"
    >
      <div className="rounded-2xl bg-background_secondary p-3 sm600:p-8 md:pt-10 md:p-10 lg:h-131.25 lg:w-168.75 lg:p-10.25">
        <div className="grid grid-cols-2 grid-rows-[auto_1fr] justify-end gap-x-2 gap-y-2 sm600:gap-x-5 sm600:gap-y-3 md:gap-x-10 md:gap-y-5">
          <div className="md:col-span-2 md:col-start-1 md:row-start-1">
            <CleaningType
              text="Siivouksen Tyyppi"
              serviceId={["Kotisiivous", "ToimistoSiivous", "MuuttoSiivous"]}
              value={selectedService}
              onChange={setSelectedService}
            />
          </div>
          <div className="col-start-1 row-start-2 flex flex-col gap-3 lg:col-span-2 lg:mt-5">
            <RoomCountSelector
              text="Huoneiden maara"
              options={ROOM_OPTIONS}
              value={selectedRooms}
              onChange={setSelectedRooms}
            />
            <CleaningFrequencySelector
              text="Tiheys"
              options={frequencyOptions}
              value={selectedFrequency}
              onChange={setSelectedFrequency}
            />
          </div>
          <div className="row-span-2 flex flex-col gap-3 md:col-start-2 md:row-start-2 lg:hidden">
            <div className="sm600:hidden">
              <KotitalousVahennysCard total={total} rate={0.35} />
            </div>
            <FinalPriceCard
              selectedService={selectedService}
              selectedRooms={selectedRooms}
              selectedFrequency={selectedFrequency}
              total={total}
              rate={0.35}
              unitLabel={unitLabel}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center lg:hidden">
          <PriceCalculatorButton
            selectedService={selectedService}
            selectedRooms={selectedRooms}
            selectedFrequency={selectedFrequency}
            total={total}
            label="Varaa Siivous"
          />
        </div>
      </div>
      <div className="hidden lg:block ">
        <FinalPriceCard
          selectedService={selectedService}
          selectedRooms={selectedRooms}
          selectedFrequency={selectedFrequency}
          total={total}
          rate={0.35}
          unitLabel={unitLabel}
        />
      </div>
    </div>
  );
};

export default CalculateLeft;
