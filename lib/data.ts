export type ActivityData = {
  title: string;
  description: string;
  icon: "prayer" | "bible" | "fellowship" | "worship" | "care" | "culture";
};

export const activities: ActivityData[] = [
  {
    title: "Prayer Together",
    description: "Weekly prayer and encouragement.",
    icon: "prayer"
  },
  {
    title: "Bible Study",
    description: "Learning God's Word and applying it to life.",
    icon: "bible"
  },
  {
    title: "Fellowship",
    description: "Building friendships across cultures.",
    icon: "fellowship"
  },
  {
    title: "Worship",
    description: "Praising God together with joy.",
    icon: "worship"
  },
  {
    title: "Community Care",
    description: "Supporting members in practical ways.",
    icon: "care"
  },
  {
    title: "Cultural Connection",
    description: "Celebrating languages, food, and stories.",
    icon: "culture"
  }
];

export type ActivityPhoto = {
  src: string;
  alt: string;
};

export const activityPhotos: ActivityPhoto[] = [
  {
    src: "/images/img.jpg",
    alt: "Fellowship gathering at Starkville Church of God"
  },
  {
    src: "/images/hero1.png",
    alt: "Members sharing a meal after service"
  },
  {
    src: "/images/image.png",
    alt: "Community fellowship photo"
  },
  {
    src: "/images/image1.png",
    alt: "Church community gathering"
  }
];

export type GroupPhoto = {
  src: string;
  alt: string;
};

export const groupPhotos: GroupPhoto[] = [
  {
    src: "/images/img.jpg",
    alt: "Church members sharing fellowship together"
  },
  {
    src: "/images/hero1.png",
    alt: "Worship gathering with the church community"
  },
  {
    src: "/images/image.png",
    alt: "Smiling church family after service"
  },
  {
    src: "/images/image1.png",
    alt: "Celebrating together as one body in Christ"
  },
  {
    src: "/images/image2.png",
    alt: "Fellowship moments with the church family"
  },
  {
    src: "/images/main.png",
    alt: "Church community worshiping together"
  },
  {
    src: "/images/hero.jpeg",
    alt: "Church fellowship group photo"
  },
  {
    src: "/images/more.png",
    alt: "Church family gathering"
  },
  {
    src: "/images/more2.png",
    alt: "Church community together in fellowship"
  }
];

export type HighlightCardData = {
  title: string;
  description: string;
  icon: "community" | "clock" | "location";
  highlights?: string[];
  schedule?: { label: string; time: string }[];
  actionLabel?: string;
  actionHref?: string;
};

export const highlightCards: HighlightCardData[] = [
  {
    title: "What We Do",
    description:
      "A faith-filled international community united in prayer, Bible study, and fellowship. We grow together in Christ while celebrating diverse cultures and languages.",
    icon: "community"
  },
  {
    title: "When We Meet",
    description: "Join us for prayer, worship, and the study of God's Word.",
    schedule: [
      { label: "Bible Study", time: "9:20 AM" },
      { label: "Worship Service", time: "10:00 AM" }
    ],
    icon: "clock"
  },
  {
    title: "Where We Meet",
    description: "Starkville Church of God\n100 Locksley Way\nStarkville, MS 39759",
    actionLabel: "Get Directions",
    actionHref:
      "https://maps.google.com/?q=Starkville+Church+of+God+100+Locksley+Way+Starkville+MS+39759",
    icon: "location"
  }
];

export type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
  showSocialIcons?: boolean;
};

export const leaders: Leader[] = [
  {
    name: "Dennis Laughlin",
    role: "Senior Pastor",
    bio: "Leading the church with prayer, teaching, and shepherding our community in Christ.",
    image: "/images/pastor1.png",
    email: "dennis@starkvillecog.com",
    facebookUrl: "https://www.facebook.com/dennis.laughlin",
    instagramUrl: "https://www.instagram.com/rdennislaughlin/"
  },
  {
    name: "Joel Barron",
    role: "Associate / Worship / Youth Pastor",
    bio: "Serving with worship leadership, youth discipleship, and pastoral care.",
    image: "/images/pastor2.png",
    email: "joel@starkvillecog.com",
    facebookUrl: "https://www.facebook.com/joel.barron.5",
    instagramUrl: "https://www.instagram.com/pastor.joel/",
    xUrl: "https://x.com/mr_joelb"
  },
  {
    name: "James Kwetey",
    role: "International Ministry Coordinator",
    bio: "Coordinating international ministry connections and community outreach.",
    image: "/images/jj.jpg",
    linkedinUrl: "https://www.linkedin.com/in/james-kwetey/",
    showSocialIcons: true
  }
];

export const members = [
  {
    name: "Aisha Sule",
    role: "Community Strategist",
    image: "/images/members/member-01.jpg"
  },
  {
    name: "Felix Armstrong",
    role: "Policy Analyst",
    image: "/images/members/member-02.jpg"
  },
  {
    name: "Lena Mensah",
    role: "Health Advocate",
    image: "/images/members/member-03.jpg"
  },
  {
    name: "Nadia Patel",
    role: "Youth Mentor",
    image: "/images/members/member-04.jpg"
  },
  {
    name: "Rafael Silva",
    role: "Program Designer",
    image: "/images/members/member-05.jpg"
  },
  {
    name: "Tariq Aden",
    role: "Operations Lead",
    image: "/images/members/member-06.jpg"
  }
];
