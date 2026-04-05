export interface Speaker {
  name: string;
  role: string;
  company: string;
  featured?: boolean;
}

export const featuredSpeakers: Speaker[] = [
  { name: "Paige Bailey", role: "AI Developer Relations Lead", company: "Google", featured: true },
  { name: "Chip Huyen", role: "Author / Founder", company: "AI Engineer", featured: true },
  { name: "Josh Sutton", role: "SVP of Innovation", company: "66 Degrees", featured: true },
  { name: "Dona Sarkar", role: "Chief Technologist, Co-Pilot & AI Extensibility", company: "Microsoft", featured: true },
];

export const speakers: Speaker[] = [
  ...featuredSpeakers,
  { name: "Kanika Vats", role: "Founder / CEO", company: "Nativelink" },
  { name: "Raja Iqbal", role: "Founder & CEO", company: "Ejento AI" },
  { name: "Marcus Eagan", role: "Speaker", company: "OAI 2026" },
  { name: "Hamza Farooq", role: "CEO", company: "Traversaal.AI / Optimized AI" },
  { name: "Kamelia Aryafar", role: "Head of AI - Members", company: "Netflix" },
  { name: "Mike Tamir", role: "SVP ML/AI - Chief Scientist", company: "Tubi" },
  { name: "Carter Abdallah", role: "DevTech Engineer", company: "NVIDIA" },
  { name: "Jess Ramos", role: "Founder & Content Creator", company: "Big Data Energy Analytics" },
  { name: "Sura Elamurugu", role: "Head of AI Platform", company: "OAI 2026" },
  { name: "Darko Mesaros", role: "Principal Developer Advocate", company: "AWS" },
  { name: "Jonathan Vogel", role: "Developer Advocate", company: "AWS" },
  { name: "Vivek Kolasani", role: "Solutions Architect", company: "OAI 2026" },
  { name: "Anton Alexander", role: "Sr. GenAI Specialist", company: "AWS/NVIDIA" },
  { name: "Ashok Prakash", role: "Staff ML Engineer", company: "OAI 2026" },
  { name: "Avinash Ahuja", role: "Director of Data Science", company: "OAI 2026" },
  { name: "Jen Agarwal", role: "AI Strategist", company: "OAI 2026" },
  { name: "Khalifeh Al Jadda", role: "Speaker", company: "OAI 2026" },
  { name: "Robert Shelton", role: "Sr. Applied AI Engineer", company: "Redis" },
  { name: "Yuanzheng Zhu", role: "Speaker", company: "OAI 2026" },
  { name: "Brian Turcotte", role: "Developer Relations", company: "Kilo Code" },
  { name: "Santosh Appachu D. Poovaiah", role: "Sr. SoC Verification Engineer", company: "OAI 2026" },
  { name: "Manai Mohamed Mortadha", role: "Speaker", company: "OAI 2026" },
  { name: "Manisha Arora", role: "Associate Director, Strategic Partnerships", company: "OAI 2026" },
  { name: "Faradawn Yang", role: "Technical Marketing Engineer", company: "NVIDIA" },
  { name: "Logan Lawler", role: "Director, Institute for Insight", company: "OAI 2026" },
  { name: "Kelley O'Keeffe", role: "Team Lead", company: "OAI 2026" },
  { name: "Laura Edell", role: "Global Policy Enforcement & Enablement Lead, Trust & Safety", company: "OAI 2026" },
  { name: "Jake Mannix", role: "AVP, Data & AI", company: "The Home Depot" },
  { name: "Yusen Xia", role: "Associate Professor & Director, Data Science & Analytics", company: "Robinson College of Business" },
  { name: "Justin Castilla", role: "Sr. Director, CX Data Science & Analytics", company: "OAI 2026" },
  { name: "Bhavuk Jain", role: "Sr. ML Engineer", company: "OAI 2026" },
  { name: "Siddarth Ranganathan", role: "Speaker", company: "OAI 2026" },
  { name: "Aaron Otto", role: "Executive Advisor", company: "Omnificity" },
  { name: "Lamar Rhodes", role: "Speaker", company: "OAI 2026" },
  { name: "Savneet Singh", role: "CEO & Founder", company: "Propagent" },
  { name: "Yasel Garcia", role: "AI Engineer", company: "OAI 2026" },
  { name: "Jared Rhodes", role: "Interview Master", company: "OAI 2026" },
  { name: "Brianna King", role: "Speaker", company: "National AI Task Force of Jamaica" },
  { name: "Mustapha Nisar", role: "Group Product Manager", company: "OAI 2026" },
  { name: "Stanislav Stolpovskiy", role: "Principal Content Engineer", company: "OAI 2026" },
  { name: "Hsin-Yi Lin", role: "Sr. Manager, Data Science", company: "Shutterstock" },
  { name: "Anwar Msehli", role: "Speaker", company: "OAI 2026" },
  { name: "Trey Grainger", role: "Founder & CEO", company: "Searchkernel" },
  { name: "Akhil Sai Devunoori", role: "Staff Software Engineer, AI", company: "OAI 2026" },
  { name: "Eric Gonzalez", role: "AI Solutions Consultant", company: "FirstMovers" },
  { name: "Daniel Beecham", role: "Speaker", company: "OAI 2026" },
  { name: "Beverly Wright", role: "Director, Institute for Insight", company: "Robinson College of Business" },
  { name: "Scott Radcliffe", role: "Speaker", company: "OAI 2026" },
  { name: "Muhammad Ali Shafique", role: "Speaker", company: "OAI 2026" },
  { name: "Lennon Shikhman", role: "Speaker", company: "OAI 2026" },
  { name: "Austin Brown", role: "Speaker", company: "OAI 2026" },
  { name: "Dawn Choo", role: "Speaker", company: "OAI 2026" },
  { name: "Victor Calderon", role: "Speaker", company: "OAI 2026" },
  { name: "Christopher Reckord", role: "Speaker", company: "OAI 2026" },
  { name: "Steven Pousty", role: "Speaker", company: "OAI 2026" },
  { name: "Aniket Wattamwar", role: "Speaker", company: "OAI 2026" },
  { name: "Barsha Saha", role: "Speaker", company: "OAI 2026" },
  { name: "Cordelia Chadwick", role: "Speaker", company: "OAI 2026" },
  { name: "Reshma Lal Jagadheesh", role: "Speaker", company: "OAI 2026" },
  { name: "Uday Reddy Malgireddy", role: "Speaker", company: "OAI 2026" },
  { name: "Shibashis Mishra", role: "Speaker", company: "OAI 2026" },
  { name: "Rajani Maski", role: "Speaker", company: "OAI 2026" },
  { name: "Nithin Mohan", role: "Speaker", company: "OAI 2026" },
  { name: "Joshua Cazoe", role: "Speaker", company: "OAI 2026" },
];

// Deterministic color from speaker name for avatar circles
const avatarHues = [15, 35, 160, 200, 260, 320, 45, 180, 280, 120, 350, 70];

export function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = avatarHues[Math.abs(hash) % avatarHues.length];
  return `hsl(${hue}, 65%, 45%)`;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
