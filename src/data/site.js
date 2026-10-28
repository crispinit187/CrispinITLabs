// Content for the whole site. Update this file and redeploy to change the text.

export const brand = {
  name: 'CrispinIT Labs',
  since: 2024,
  region: 'Zambia',
};

export const contact = {
  email: 'crispinit187@gmail.com',
  phoneDisplay: '+260 763 299 221',
  phoneTel: '+260763299221',
  whatsapp: 'https://wa.me/260763299221',
};

// Order is final: core builds, design, launch and visibility, after launch.
export const services = [
  { id: 'business-websites', group: 'Core builds', tag: 'WB', title: 'Business websites', text: 'Company, restaurant, school, church and organisation sites that load fast and look sharp on every phone.' },
  { id: 'web-applications', group: 'Core builds', tag: 'WA', title: 'Web applications', text: 'Custom React apps and dashboards built around how your team actually works.' },
  { id: 'management-systems', group: 'Core builds', tag: 'MS', title: 'Management systems', text: 'Attendance, registration, inventory, fleet and similar systems with roles, records and reports.' },
  { id: 'ui-ux-design', group: 'Design', tag: 'UX', title: 'UI/UX design', text: 'Mockups and layouts that match your brand, approved by you before the final build starts.' },
  { id: 'redesigns', group: 'Design', tag: 'RD', title: 'Redesigns', text: 'A modern, faster and mobile-friendly version of a website you already have.' },
  { id: 'domain-hosting', group: 'Launch and visibility', tag: 'DH', title: 'Domain and hosting setup', text: 'Domain registration, DNS, SSL certificates and deployment so your site goes live properly.' },
  { id: 'seo', group: 'Launch and visibility', tag: 'SEO', title: 'SEO and Google readiness', text: 'Metadata, sitemaps and indexing so people searching in Zambia can find you on Google.' },
  { id: 'maintenance', group: 'After launch', tag: 'MT', title: 'Website maintenance', text: 'Updates, fixes and content changes after launch, so your site stays current.' },
  { id: 'training', group: 'After launch', tag: 'TR', title: 'Training and handover', text: 'Clear walkthroughs so you and your team know how to run your site or system.' },
];

// A project counts as live only when it has a real url. Live projects come first.
export const projects = [
  {
    id: 'ictaz-ms',
    name: 'ICTAZ CBU LSKC Management System',
    text: 'A chapter management system with one sign-in for members and staff. Attendance is the first module, using a QR code that changes every 45 seconds.',
    tech: 'Management system',
    url: 'https://crispinit187.github.io/ICTAZ-CBU-LSKC-MS/',
    image: 'projects/ictaz.webp',
    alt: 'Sign-in screen of the ICTAZ CBU Chapter Management System',
    tones: ['#5B708A', '#9DB7D5'],
  },
  {
    id: 'attendance-registration',
    name: 'Attendance Registration System',
    text: 'A web app for registering and tracking attendance at events. Members scan a QR code to mark themselves present, while registrars and admins run live attendance lists and sign-up lists, with offline marking and role-based access.',
    tech: 'React, Supabase',
    url: 'https://crispinit187.github.io/Attendance-registration-system/',
    image: 'projects/attendance.webp',
    alt: 'Sign-in screen of the Attendance Registration System',
    tones: ['#1E2A3A', '#9DB7D5'],
  },
  {
    id: 'regional-male-choir',
    name: 'Regional Male Choir',
    text: 'A site for the NAC Lusaka Region Male Choir Practice and the 800 Male Choir Christmas Concert, with a live countdown and the practice plan.',
    tech: 'React, GitHub Pages',
    url: 'https://crispinit187.github.io/LRMCW/',
    image: 'projects/male-choir.webp',
    alt: 'Home page of the Regional Combined Male Choir Practice site',
    tones: ['#1E2A3A', '#9DB7D5'],
  },
  {
    id: 'ypc-meet-greet',
    name: 'YPC Meet and Greet',
    text: 'An event website for the Lusaka East Luangwa Apostle Area Young People\u2019s Choir, with the programme and search-ready pages.',
    tech: 'React, GitHub Pages',
    url: 'https://crislibjr.github.io/LELLAYPC/',
    tones: ['#5B708A', '#F8FBFF'],
  },
  {
    id: 'cris-k',
    name: 'Cris K',
    text: 'A personal website for a Lusaka pianist and saxophonist, with his story, performances and photos.',
    tech: 'HTML, CSS, GitHub Pages',
    url: 'https://www.crismusic.qd.je',
    tones: ['#1E2A3A', '#5B708A'],
  },
  {
    id: 'daphine-c-printers',
    name: 'Daphine C Printers',
    text: 'A website for a printing shop in Kanyama, Lusaka, showing its services and how to place an order.',
    tech: 'React',
    url: '',
    tones: ['#5B708A', '#9DB7D5'],
  },
  {
    id: 'dining-enclave',
    name: 'Dining Enclave',
    text: 'A restaurant website for a Lusaka client, currently in planning.',
    tech: 'React',
    url: '',
    tones: ['#9DB7D5', '#F8FBFF'],
  },
];

export const skills = [
  'React', 'ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core',
  'Supabase', 'JavaScript', 'HTML and CSS', 'Git and GitHub', 'GitHub Pages',
];

export const experience = [
  { when: '2026 to 2027', title: 'Partnerships and Industry Relations Director', where: 'ICTAZ CBU Chapter', text: 'Building partnerships between the chapter and industry.' },
  { when: 'Current', title: 'Tech Lead and Software Development Intern', where: 'CBU IBIC team', text: 'Leading the technical side of the team’s software work.' },
  { when: 'Current', title: 'Software Development Intern', where: 'Software company', text: 'Working on real software projects, now on a formal extension of the internship.' },
  { when: 'Past', title: 'Secretary General', where: 'ICTAZ CBU Chapter', text: 'Ran the chapter’s records and communication as a former executive.' },
  { when: 'Current', title: 'Computer Engineering student', where: 'Copperbelt University, Lusaka Campus', text: 'Third year, and Class Representative.' },
];
