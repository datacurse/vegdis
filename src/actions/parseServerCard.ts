import type { IServerCard } from "@/interfaces";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function parseServerCards(records: any[]): IServerCard[] {
    return records.map(record => ({
      title: record.title,
      inviteLink: record.invinteLink || '', // Note: There's a typo in the original data ('invinteLink')
      iconSrc: record.iconSrc,
      members: {
        total: Number.parseInt(record.members_total, 10),
        online: Number.parseInt(record.members_online, 10)
      },
      votes: Number.parseInt(record.votes, 10),
      language: record.language,
      tags: record.tags.split(',').map((tag: string) => tag.trim()),
      description: record.description
    }));
  }
