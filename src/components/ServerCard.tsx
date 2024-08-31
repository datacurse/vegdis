import React from "react";

import type { IServerCard } from "@/data";

export function ServerCard({ title, iconSrc, members, votes, language, tags, description }: IServerCard) {
  return (
    <article className="relative col-span-4 w-full overflow-hidden rounded-md p-3">
      <div className="relative z-10 space-y-3">
        <div className="grid grid-cols-[80px_1fr] items-center">
          <div className="h-[80px] w-[80px]">
            <a aria-label="View server page" href={`/server/${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="relative overflow-hidden rounded-md" style={{ width: 80, height: 80 }}>
                <img
                  alt={`${title} server icon`}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="absolute h-full w-full inset-0"
                  src={iconSrc}
                />
              </div>
            </a>
          </div>
          <div className="flex flex-col ml-4">
            <a
              className="text-2xl font-bold text-high line-clamp-1"
              href={`/server/${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {title}
            </a>
            <div className="flex items-center space-x-2 text-sm text-medium">
              <span className="uppercase">{language}</span>
              <div className="bg-medium h-1 w-1 rounded-full"/>
              <span>{members.total.toLocaleString()} members</span>
              <div className="bg-medium h-1 w-1 rounded-full"/>
              <span>{votes} votes</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {tags.map((tag) => (
            <a key={tag} href={`/servers/tag/${tag}`}>
              <div className="bg-surface-4 hover:bg-surface-6 cursor-pointer transition ease-in duration-100 inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-md text-high">
                <p>{tag}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="min-h-[60px]">
          <p className="text-sm leading-5 text-high line-clamp-3">{description}</p>
        </div>

        <div className="flex gap-2">
          <a className="w-full" href={`/server/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="transition ease-in-out duration-300 rounded-md focus:outline-none border px-4 py-1 text-sm border-transparent w-full flex items-center justify-center bg-surface-4 hover:bg-surface-6 text-high focus:ring-1 ring-surface-8 font-medium uppercase">
              <div className="flex items-center space-x-1">
                <span>view</span>
              </div>
            </div>
          </a>
          <a className="w-full" target="_blank" href={`/server/${title.toLowerCase().replace(/\s+/g, "-")}/join`}>
            <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-400 px-4 py-1 font-medium text-high text-sm uppercase ring-surface-8 transition duration-300 ease-in-out hover:bg-primary-500 focus:outline-none focus:ring-1">
              <div className="flex items-center space-x-1">
                <span>join</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-md -z-10 bg-surface-1 border border-surface-4" />
    </article>
  );
}
