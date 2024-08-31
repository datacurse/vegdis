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
}
