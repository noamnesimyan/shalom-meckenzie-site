export type ScheduleEvent = {
  time?: string;
  period: string;
  title: string;
  description: string;
  dressCode?: { label: string; subtitle?: string; images?: string[] };
};

export type ScheduleDay = {
  id: string;
  dayLabel: string;
  date: string;
  tag: string;
  events: ScheduleEvent[];
};

export const scheduleDays: ScheduleDay[] = [
  {
    id: "arrival",
    dayLabel: "Friday, June 12",
    date: "June 12",
    tag: "ARRIVAL DAY",
    events: [
      {
        time: "12:00 – 14:00",
        period: "NOON",
        title: "Private Boarding & Check-In",
        description:
          "Guests arrive at the old port of marseille and are welcomed aboard for a relaxed check-in experience as the yacht opens for the weekend ahead.",
      },
      {
        time: "12:00 – 16:00",
        period: "AFTERNOON",
        title: "Welcome Lunch & Cocktails",
        description:
          "A leisurely lunch is served on deck alongside signature welcome cocktails, music, and the first moments together at sea.",
      },
      {
        time: "19:00",
        period: "EVENING",
        title: "Friday Dinner on Board",
        description:
          "As the Riviera begins to glow at sunset, guests gather for an intimate Friday evening dinner aboard the yacht.",
        dressCode: {
          label: "WHITE",
          images: [
            "/images/dress-code/friday/white-1.jpg",
            "/images/dress-code/friday/white-2.jpg",
            "/images/dress-code/friday/white-3.jpg",
            "/images/dress-code/friday/white-4.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "main",
    dayLabel: "Saturday, June 13",
    date: "June 13",
    tag: "THE MAIN EVENT",
    events: [
      {
        time: "07:00 – 11:00",
        period: "MORNING",
        title: "Breakfast at Sea",
        description:
          "A slow morning with breakfast served on deck, fresh coffee, sea air, and views across the Côte d’Azur.",
      },
      {
        time: "12:00 – 16:00",
        period: "AFTERNOON",
        title: "Lunch & water sports on the yacht",
        description:
          "Free time to explore Saint-Tropez, enjoy water sports, or unwind aboard with lunch served throughout the afternoon.",
      },
      {
        time: "19:00",
        period: "EVENING",
        title: "Departure to Birthday Celebration",
        description:
          "Guests meet at the yacht library before departing together for Shalom’s birthday celebration at the golf club Saint Tropez.",
        dressCode: {
          label: "COLORFUL SAINT-TROPEZ CHIC",
          images: [
            "/images/dress-code/saturday/chic-1.jpg",
            "/images/dress-code/saturday/chic-2.jpg",
            "/images/dress-code/saturday/chic-3.jpg",
            "/images/dress-code/saturday/chic-4.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "farewell",
    dayLabel: "Sunday, June 14",
    date: "June 14",
    tag: "FAREWELL",
    events: [
      {
        time: "07:00 – 11:00",
        period: "MORNING",
        title: "A Slow Morning",
        description:
          "Late breakfast on deck. Sea breeze. No schedule. Savour the final hours drifting along the Riviera waters.",
      },
      {
        time: "13:00",
        period: "AFTERNOON",
        title: "Checkout and goodbye",
        description:
          "At Villefranche-sur-Mer (20 min boat + 40 min drive to Nice Airport).",
      },
      {
        time: "15:00",
        period: "DEPARTURE",
        title: "Return Flights to TLV",
        description:
          "A private return flight to Tel Aviv departs at 15:00. Guests who prefer are, of course, welcome to arrange individual departures according to their flight schedules.",
      },
    ],
  },
];
