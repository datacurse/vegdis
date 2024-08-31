export interface IServerCard {
    title: string;
    iconSrc: string;
    members: {
        total: number;
        online: number;
    };
    votes: number;
    language: string;
    tags: string[];
    description: string;
  }

export const serverCards: IServerCard[] = [
  {
    title: "Vegan Dreamland",
    iconSrc: "https://cdn.discordapp.com/icons/736679029817737306/a1582cc3f87c85360da0bdab4ae7674a.jpg",
    members: {
        total: 36809,
        online: 4487
    },
    votes: 1000,
    language: "de",
    tags: ["social", "community", "chill", "hangout", "vegan"],
    description:
      "Veganismus, Tiere, Ethik, Gesundheit, Ernährung, Umwelt, menschliche Entwicklung, Vegetarier, Rezepte, Essen, Bilder",
  },
  {
    title: "Animal Rights Advocates",
    iconSrc: "https://cdn.discordapp.com/icons/730907954345279591/c5ca6af0106cb143fd5730b76e571b3d.jpg",
    members: {
        total: 22607,
        online: 1955
    },
    votes: 500,
    language: "en",
    tags: ["animal-rights", "activism", "social"],
    description:
      "We are an animal rights group that uses a number of ways to do vegan outreach online.\nIf you're not a vegan you're invited to join and have a productive conversation regarding the topic!",
  },
  {
    title: "The Nutrivore",
    iconSrc: "https://cdn.discordapp.com/icons/692563032546476062/da0ba34c1ce5176603ffc064ff80677e.jpg",
    members: {
        total: 12314,
        online: 13214
    },
    votes: 234,
    language: "en",
    tags: ["science", "health", "diet", "vegan", "nutrition"],
    description:
      "An evidence-based community dedicated to debunking pseudoscience, especially in the fields of nutrition, health and fitness. Casual discourse is welcome, and includes topics such as cooking, gaming, technology, animals, and more! Current users span many disciplines and include both students and professionals in the fields of nutrition, statistics, medicine, and philosophy! All levels of interest and expertise are welcome!",
  },
  {
    title: "Vegan World",
    iconSrc: "https://cdn.discordapp.com/icons/929790901876822106/5356f8b07f9f681f0d69da6819e78fb8.jpg",
    members: {
        total: 44979,
        online: 5302
    },
    votes: 234,
    language: "en",
    tags: ["social", "community", "fun", "chill", "vegan"],
    description:
      "The most active vegan server! 🐷\n• Join us for friendly and welcoming discussions and debates revolving around veganism and animal ethics!\n• For vegans: 24/7 Voice activism, events and workshops.\n• Free customized help with plant based diets.",
  },
  {
    title: "Vegan Furries",
    iconSrc: "https://cdn.discordapp.com/icons/1110332418617004142/a_7141f65b94de7eb65a5a2dff60c94d16.jpg",
    members: {
        total: 188,
        online: 42
    },
    votes: 234,
    language: "en",
    tags: ["art", "furry", "therian", "vegan"],
    description:
      "A server for vegans that want to chill out! It's focused on the furry culture, but anyone is welcome if they are vegan or at least vegan curious.\nWe also have a Minecraft server with vegan features ( no animal exploitation, and vegan foods ).\nAnd of course, we are pro disability rights, women's rights, queer rights, black rights, and beyond.",
  },
  {
    title: "VegAntinatalism",
    iconSrc: "https://cdn.discordapp.com/icons/235151965967876096/a_909b863bcb08fdb635246751020a618c.jpg",
    members: {
        total: 665,
        online: 56
    },
    votes: 100,
    language: "en",
    tags: ["community", "philosophy", "vegan", "childfree", "antinatalism"],
    description:
      "A crossover community where antinatalism and veganism are the main drivers of discourse.\n18+, non antinatalists/vegans welcome.",
  },
];
