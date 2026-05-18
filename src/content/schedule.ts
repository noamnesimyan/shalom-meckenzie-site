export type ScheduleEvent = {
  time?: string;
  period: string;
  title: string;
  description: string;
  dressCode?: { label: string; subtitle: string; images?: string[] };
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
    dayLabel: "Friday, June 20",
    date: "June 20",
    tag: "ARRIVAL DAY",
    events: [
      {
        time: "12:00 – 14:00",
        period: "NOON",
        title: "Private Boarding",
        description:
          "Guests are received at the Port of Marseille for a champagne welcome aboard the Corinthian. Our crew awaits.",
      },
      {
        time: "20:00",
        period: "EVENING",
        title: "Dinner at Sea",
        description:
          "Our first evening together as the Corinthian sets her sails southbound. The Riviera darkens to silhouette around us.",
        dressCode: {
          label: "RIVIERA WHITE",
          subtitle: "All-white travel attire",
          images: [
            "/images/dress-code/friday/white-1.jpg",
            "/images/dress-code/friday/white-2.jpg",
            "/images/dress-code/friday/white-3.jpg",
            "/images/dress-code/friday/white-4.jpg",
            "/images/dress-code/friday/white-5.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "main",
    dayLabel: "Saturday, June 21",
    date: "June 21",
    tag: "THE MAIN EVENT",
    events: [
      {
        time: "09:00",
        period: "MORNING",
        title: "Breakfast on Deck",
        description:
          "Coffee, croissants, and the open Mediterranean horizon. The day has nowhere to rush.",
      },
      {
        time: "13:00",
        period: "AFTERNOON",
        title: "Lunch Aboard",
        description:
          "A long, sun-drenched lunch as we approach Saint-Tropez. The coastline sharpens in the afternoon light.",
      },
      {
        time: "16:00",
        period: "FREE TIME",
        title: "Free Time in Saint-Tropez",
        description:
          "The harbour, the boutiques, the beaches — yours to explore at leisure. Tenders run on request.",
      },
      {
        time: "21:00",
        period: "EVENING",
        title: "The Grand Celebration",
        description:
          "The heart of our weekend. Dinner, music, dancing under the stars at La Réserve Ramatuelle — the night you came for.",
        dressCode: {
          label: "SAINT-TROPEZ CHIC",
          subtitle: "Vibrant colour, Mediterranean elegance",
          images: [
            "/images/dress-code/saturday/chic-1.jpg",
            "/images/dress-code/saturday/chic-2.jpg",
            "/images/dress-code/saturday/chic-3.jpg",
            "/images/dress-code/saturday/chic-4.jpg",
            "/images/dress-code/saturday/chic-5.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "farewell",
    dayLabel: "Sunday, June 22",
    date: "June 22",
    tag: "FAREWELL",
    events: [
      {
        time: "10:00",
        period: "MORNING",
        title: "A Slow Morning",
        description:
          "Late breakfast on deck. Sea breeze. No schedule. Savour the last hours on the water.",
      },
      {
        time: "14:00",
        period: "AFTERNOON",
        title: "Disembarkation & Farewell",
        description:
          "Transfers arranged for all guests from port. Until the next horizon.",
      },
    ],
  },
];
