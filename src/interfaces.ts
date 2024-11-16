export interface IServerCard {
  title: string;
  inviteLink: string;
  iconSrc: string;
  members: number,
  votes: number;
  language: string;
  tags: string[];
  description: string;
  verification: boolean;
  adultsOnly: boolean;
  nsfw: boolean;
}
