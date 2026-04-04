export interface Speaker {
  name: string;
  role: string;
  company: string;
  featured?: boolean;
}

export const featuredSpeakers: Speaker[] = [
  { name: "Paige Bailey", role: "AI Developer Relations Lead", company: "Google", featured: true },
  { name: "Chip Huyen", role: "Author / Founder", company: "", featured: true },
  { name: "Josh Sutton", role: "SVP of Innovation", company: "66 Degrees", featured: true },
  { name: "Dona Sarkar", role: "Chief Technologist, Co-Pilot & AI Extensibility", company: "Microsoft", featured: true },
];

export const speakers: Speaker[] = [
  ...featuredSpeakers,
  { name: "Kanika Vats", role: "Founder / CEO", company: "Nativelink" },
  { name: "Raja Iqbal", role: "Founder & CEO", company: "Ejento AI" },
  { name: "Marcus Eagan", role: "", company: "" },
  { name: "Hamza Farooq", role: "CEO", company: "Traversaal.AI / Optimized AI" },
  { name: "Kamelia Aryafar", role: "Head of AI - Members", company: "Netflix" },
  { name: "Mike Tamir", role: "SVP ML/AI - Chief Scientist", company: "Tubi" },
  { name: "Carter Abdallah", role: "DevTech Engineer", company: "NVIDIA" },
  { name: "Jess Ramos", role: "Founder & Content Creator", company: "Big Data Energy Analytics" },
  { name: "Sura Elamurugu", role: "Head of AI Platform", company: "" },
  { name: "Darko Mesaros", role: "Principal Developer Advocate", company: "AWS" },
  { name: "Jonathan Vogel", role: "Developer Advocate", company: "AWS" },
  { name: "Vivek Kolasani", role: "Solutions Architect", company: "" },
  { name: "Anton Alexander", role: "Sr. GenAI Specialist", company: "AWS/NVIDIA" },
  { name: "Ashok Prakash", role: "Staff ML Engineer", company: "" },
  { name: "Joshua Sutton", role: "Chief Innovation Officer", company: "66 Degrees" },
  { name: "Avinash Ahuja", role: "Director of Data Science", company: "" },
  { name: "Jen Agarwal", role: "AI Strategist", company: "" },
  { name: "Khalifeh Al Jadda", role: "", company: "" },
  { name: "Robert Shelton", role: "Sr. Applied AI Engineer", company: "Redis" },
  { name: "Yuanzheng Zhu", role: "", company: "" },
  { name: "Brian Turcotte", role: "Developer Relations", company: "Kilo Code" },
  { name: "Santosh Appachu D. Poovaiah", role: "Sr. SoC Verification Engineer", company: "" },
  { name: "Manai Mohamed Mortadha", role: "", company: "" },
  { name: "Manisha Arora", role: "Associate Director, Strategic Partnerships", company: "" },
  { name: "Faradawn Yang", role: "Technical Marketing Engineer", company: "NVIDIA" },
  { name: "Logan Lawler", role: "Director, Institute for Insight", company: "" },
  { name: "Kelley O'Keeffe", role: "Team Lead", company: "" },
  { name: "Laura Edell", role: "Global Policy Enforcement & Enablement Lead, Trust & Safety", company: "" },
  { name: "Jake Mannix", role: "AVP, Data & AI", company: "The Home Depot" },
  { name: "Yusen Xia", role: "Associate Professor & Director, Data Science & Analytics", company: "Robinson College of Business" },
  { name: "Justin Castilla", role: "Sr. Director, CX Data Science & Analytics", company: "" },
  { name: "Bhavuk Jain", role: "Sr. ML Engineer", company: "" },
  { name: "Siddarth Ranganathan", role: "", company: "" },
  { name: "Aaron Otto", role: "Executive Advisor", company: "Omnificity" },
  { name: "Lamar Rhodes", role: "", company: "" },
  { name: "Savneet Singh", role: "CEO & Founder", company: "Propagent" },
  { name: "Yasel Garcia", role: "AI Engineer", company: "" },
  { name: "Jared Rhodes", role: "Interview Master", company: "" },
  { name: "Brianna King", role: "", company: "National AI Task Force of Jamaica" },
  { name: "Mustapha Nisar", role: "Group Product Manager", company: "" },
  { name: "Stanislav Stolpovskiy", role: "Principal Content Engineer", company: "" },
  { name: "Hsin-Yi Lin", role: "Sr. Manager, Data Science", company: "Shutterstock" },
  { name: "Anwar Msehli", role: "", company: "" },
  { name: "Trey Grainger", role: "Founder & CEO", company: "Searchkernel" },
  { name: "Akhil Sai Devunoori", role: "Staff Software Engineer, AI", company: "" },
  { name: "Eric Gonzalez", role: "AI Solutions Consultant", company: "FirstMovers" },
  { name: "Daniel Beecham", role: "", company: "" },
  { name: "Beverly Wright", role: "Director, Institute for Insight", company: "Robinson College of Business" },
  { name: "Scott Radcliffe", role: "", company: "" },
  { name: "Muhammad Ali Shafique", role: "", company: "" },
  { name: "Lennon Shikhman", role: "", company: "" },
  { name: "Austin Brown", role: "", company: "" },
  { name: "Dawn Choo", role: "", company: "" },
  { name: "Victor Calderon", role: "", company: "" },
  { name: "Christopher Reckord", role: "", company: "" },
  { name: "Steven Pousty", role: "", company: "" },
  { name: "Aniket Wattamwar", role: "", company: "" },
  { name: "Barsha Saha", role: "", company: "" },
  { name: "Cordelia Chadwick", role: "", company: "" },
  { name: "Reshma Lal Jagadheesh", role: "", company: "" },
  { name: "Uday Reddy Malgireddy", role: "", company: "" },
  { name: "Shibashis Mishra", role: "", company: "" },
  { name: "Rajani Maski", role: "", company: "" },
  { name: "Nithin Mohan", role: "", company: "" },
  { name: "Joshua Cazoe", role: "", company: "" },
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
