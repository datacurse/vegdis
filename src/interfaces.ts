export interface IServerCard {
  title: string;
  inviteLink: string;
  iconSrc: string;
  members: {
    total: number;
    online: number;
  };
  votes: number;
  language: string;
  tags: string[];
  description: string;
  vcActivityLevel: "active" | "semiActive" | "inactive";
  adultsOnly: boolean;
  sfw: boolean;
  safeSpace: boolean;
  nonVeganPolicy: "permited" | "notPermitted" | "tolerated" | "bullied";
  review: {
    loki: string,
    cobaltcat: string
  }
}
