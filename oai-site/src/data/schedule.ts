export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  type: 'talk' | 'break' | 'keynote' | 'panel';
}

export const virtualSchedule: ScheduleItem[] = [
  { time: "09:00 - 09:05 AM", title: "Welcome Keynote", type: "keynote" },
  { time: "09:05 - 09:15 AM", title: "Conference Kickoff", type: "keynote" },
  { time: "09:15 - 09:45 AM", title: "What's New and What's Next for Generative AI?", speaker: "Paige Bailey", type: "talk" },
  { time: "09:45 - 10:15 AM", title: "Building Enterprise Multi-Agent Communications", speaker: "Jake Mannix", type: "talk" },
  { time: "10:15 - 10:30 AM", title: "Break", type: "break" },
  { time: "10:30 - 11:00 AM", title: "Deploying Agents in Enterprise", speaker: "Josh Sutton, Marcus Eagan, Hamza Farooq, Kanika Vats", type: "panel" },
  { time: "11:00 - 11:45 AM", title: "A Bold & Responsible Agentic Future", speaker: "Pilar Manchon", type: "talk" },
  { time: "11:45 - 12:15 PM", title: "AI Knowledge Layer for Agents", speaker: "Philip Rathle", type: "talk" },
  { time: "12:15 - 01:00 PM", title: "Lunch Break", type: "break" },
  { time: "01:00 - 01:30 PM", title: "Self Optimizing Agents for Deep Research", speaker: "Jakub Zavrel", type: "talk" },
  { time: "01:30 - 02:00 PM", title: "Security & Governance: The Achilles Heel of Enterprise Agentic AI", speaker: "Raja Iqbal", type: "talk" },
  { time: "02:00 - 02:30 PM", title: "AI for Coding", speaker: "Chip Huyen", type: "talk" },
  { time: "02:30 - 02:35 PM", title: "Closing", type: "keynote" },
];

export const inPersonSchedule = {
  day1: {
    date: "March 30, 2026",
    label: "Day 1: Conference Talks",
    description: "Full day of keynotes, talks, and panels from industry leaders.",
  },
  day2: {
    date: "March 31, 2026",
    label: "Day 2: Conference Talks + Workshops",
    description: "Morning talks followed by afternoon hands-on workshops starting at 1:00 PM.",
  },
};
