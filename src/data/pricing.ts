import type { serviceId } from "@/data/services";

export const ROOM_OPTIONS = [
  { label: "1h+kp", value: 1 },
  { label: "2h+kp", value: 2 },
  { label: "3h+kp", value: 3 },
  { label: "4h+kp", value: 4 },
  { label: "5h+kp", value: 5 },
  { label: "6h++", value: 6 },
] as const;

export type RoomValue = (typeof ROOM_OPTIONS)[number]["value"];

export const FREQUENCY_OPTIONS = [
  "Kertasiivous",
  "Viikottain",
  "Joka 2. Viikko",
  "Kuukausittain",
] as const;

export type CleaningFrequency = (typeof FREQUENCY_OPTIONS)[number];

const UNIT_LABELS_BY_FREQUENCY: Record<CleaningFrequency, string> = {
  Kertasiivous: "Kerta",
  Viikottain: "Viikko",
  "Joka 2. Viikko": "2. Viikko",
  Kuukausittain: "Kuukausi",
};

const HOME_PRICING_BY_ROOM: Record<
  RoomValue,
  Record<CleaningFrequency, number>
> = {
  1: {
    Kertasiivous: 110,
    Viikottain: 94,
    "Joka 2. Viikko": 94,
    Kuukausittain: 110,
  },
  2: {
    Kertasiivous: 165,
    Viikottain: 141,
    "Joka 2. Viikko": 141,
    Kuukausittain: 165,
  },
  3: {
    Kertasiivous: 220,
    Viikottain: 188,
    "Joka 2. Viikko": 188,
    Kuukausittain: 220,
  },
  4: {
    Kertasiivous: 275,
    Viikottain: 235,
    "Joka 2. Viikko": 235,
    Kuukausittain: 275,
  },
  5: {
    Kertasiivous: 330,
    Viikottain: 282,
    "Joka 2. Viikko": 282,
    Kuukausittain: 330,
  },
  6: {
    Kertasiivous: 385,
    Viikottain: 329,
    "Joka 2. Viikko": 329,
    Kuukausittain: 385,
  },
};

type OfficeTier = "small" | "med" | "large";

const OFFICE_TIER_BY_ROOM: Record<RoomValue, OfficeTier> = {
  1: "small",
  2: "small",
  3: "med",
  4: "med",
  5: "large",
  6: "large",
};

const OFFICE_PRICING_BY_TIER: Record<
  OfficeTier,
  Record<CleaningFrequency, number>
> = {
  small: {
    Kertasiivous: 130,
    Viikottain: 140,
    "Joka 2. Viikko": 90,
    Kuukausittain: 60,
  },
  med: {
    Kertasiivous: 250,
    Viikottain: 220,
    "Joka 2. Viikko": 140,
    Kuukausittain: 90,
  },
  large: {
    Kertasiivous: 400,
    Viikottain: 380,
    "Joka 2. Viikko": 220,
    Kuukausittain: 140,
  },
};

const MOVE_OUT_PRICING_BY_ROOM: Record<RoomValue, number> = {
  1: 240,
  2: 320,
  3: 390,
  4: 480,
  5: 580,
  6: 700,
};

const MOVE_OUT_FREQUENCIES: readonly CleaningFrequency[] = ["Kertasiivous"];

const OFFICE_UNIT_LABELS_BY_FREQUENCY: Record<CleaningFrequency, string> = {
  Kertasiivous: "Kerta",
  Viikottain: "Kuukausi",
  "Joka 2. Viikko": "Kuukausi",
  Kuukausittain: "Kuukausi",
};

export function getFrequencyOptions(
  service: serviceId | null,
): readonly CleaningFrequency[] {
  if (service === "MuuttoSiivous") {
    return MOVE_OUT_FREQUENCIES;
  }

  return FREQUENCY_OPTIONS;
}

export function getUnitLabel(
  service: serviceId | null,
  frequency: CleaningFrequency | null,
): string {
  if (!service || !frequency) {
    return "";
  }

  if (service === "ToimistoSiivous") {
    return OFFICE_UNIT_LABELS_BY_FREQUENCY[frequency];
  }

  return UNIT_LABELS_BY_FREQUENCY[frequency];
}

export function calculatePrice(
  service: serviceId | null,
  rooms: RoomValue | null,
  frequency: CleaningFrequency | null,
): number {
  if (!service || !rooms) {
    return 0;
  }

  if (service === "MuuttoSiivous") {
    return MOVE_OUT_PRICING_BY_ROOM[rooms] ?? 0;
  }

  const resolvedFrequency = frequency ?? getFrequencyOptions(service)[0];
  if (!resolvedFrequency) {
    return 0;
  }

  if (service === "Kotisiivous") {
    return HOME_PRICING_BY_ROOM[rooms]?.[resolvedFrequency] ?? 0;
  }

  const tier = OFFICE_TIER_BY_ROOM[rooms];
  return OFFICE_PRICING_BY_TIER[tier]?.[resolvedFrequency] ?? 0;
}
