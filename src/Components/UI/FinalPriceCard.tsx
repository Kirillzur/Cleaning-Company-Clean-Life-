import type { RoomValue, CleaningFrequency } from "@/data/pricing";
import type { serviceId } from "@/data/services";
import KotitalousVahennysCard from "./KotitalousVahennysCard";
import PriceCalculatorButton from "./PriceCalculatorButton";

interface FinalPriceCardProps {
  total: number;
  rate?: number;
  unitLabel?: string;
  selectedService: serviceId | null;
  selectedRooms: RoomValue | null;
  selectedFrequency: CleaningFrequency | null;
}

const FinalPriceCard = ({
  total,
  rate = 0.35,
  unitLabel = "",
  selectedService,
  selectedRooms,
  selectedFrequency
}: FinalPriceCardProps) => {
  const formatted = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <div className="flex w-full flex-col rounded-3xl bg-primary p-4 text-white lg:h-[535px] lg:max-w-[331px] lg:p-8">
      <div className="text-[19px] sm600:text-[24px] md:text-[28px] font-bold">
        {formatted}
        {unitLabel ? ` / ${unitLabel}` : ""}
      </div>
      <p className="mt-2 text-[11px] md:text-[13px] text-white/80">
        Hintaan ei sisälly Kotitalousvähennys. Lopullinen hinta voi vaihdella
        kohteen kunnon mukaan.
      </p>
      <div className="mt-4 hidden border-t border-white/20 pt-4 sm600:block">
        <KotitalousVahennysCard total={total} rate={rate} variant="inline" />
      </div>
      <div className="mt-6 hidden lg:flex lg:justify-center lg:mt-auto">
        <PriceCalculatorButton
          selectedService={selectedService}
          selectedRooms={selectedRooms}
          selectedFrequency={selectedFrequency}
          total={total}
          label="Varaa Siivous"
        />
      </div>
    </div>
  );
};

export default FinalPriceCard;
