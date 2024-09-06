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
  activeVc: boolean;
  adultsOnly: boolean;
  nsfw: boolean;
  safeSpace: boolean;
  nonVeganPolicy: "permited" | "notPermitted" | "tolerated" | "bullied";
  review: {
    loki: string,
    cobaltcat: string
  }
}
