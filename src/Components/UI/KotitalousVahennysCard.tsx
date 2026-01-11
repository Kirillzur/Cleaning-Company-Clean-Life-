interface KotitalousVahennysCardProps {
  total: number;
  rate?: number;
  variant?: "standalone" | "inline";
}

const KotitalousVahennysCard = ({
  total,
  rate = 0.35,
  variant = "standalone",
}: KotitalousVahennysCardProps) => {
  const deduction = total * rate;

  const formatted = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(deduction);

  const containerClassName =
    variant === "inline"
      ? "text-white"
      : "rounded-3xl bg-primary text-white p-4";

  return (
    <div className={containerClassName}>
      <div className="flex items-center gap-2 text-[12px] md:text-[15px] font-bold">
        <span>Kotitalousvähennys (-{Math.round(rate * 100)}%)</span>
      </div>
      <p className="mt-2 text-[11px] md:text-[13px] text-white/80">
        Saa vähentää verotuksessa 35% työn osuudesta.
      </p>
      <p className="mt-2 text-[12px] md:text-[15px] font-bold">
        Vahennyksen määrä: {formatted}
      </p>
    </div>
  );
};

export default KotitalousVahennysCard;
