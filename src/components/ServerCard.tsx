import React from "react";
import type { IServerCard } from "@/interfaces";
import Tag from "./Tag";

export function ServerCard({ serverCard }: { serverCard: IServerCard }) {
  const {
    title,
    inviteLink,
    iconSrc,
    members,
    votes,
    language,
    tags,
    description,
    adultsOnly,
    nonVeganPolicy,
    safeSpace,
    nsfw,
    activeVc,
  } = serverCard;

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
              <div className="bg-medium h-1 w-1 rounded-full" />
              <span>{members.total.toLocaleString()} members</span>
              <div className="bg-medium h-1 w-1 rounded-full" />
              <span>{votes} votes</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1">
            {adultsOnly && (
              <Tag className="bg-[#913838] hover:bg-[#c55151]">
                <p>18+</p>
              </Tag>
            )}
            {nsfw && (
              <Tag className="bg-[#913838] hover:bg-[#c55151]">
                <p>nsfw</p>
              </Tag>
            )}
            {activeVc && (
              <Tag className="bg-surface-4 hover:bg-surface-6">
                <div className="flex flex-row space-x-1">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
                    />
                    <path
                      fill="currentColor"
                      d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
                    />
                  </svg>
                  <div>active VC</div>
                </div>
              </Tag>
            )}
            {safeSpace && (
              <Tag className="bg-surface-4 hover:bg-surface-6">
                <p>safe space</p>
              </Tag>
            )}
            <Tag className="bg-surface-4 hover:bg-surface-6">
              <p>non-vegans are {nonVeganPolicy}</p>
            </Tag>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              {tags.map((tag) => (
                <Tag key={tag} href={`/servers/tag/${tag}`} className="bg-surface-4 hover:bg-surface-6">
                  <p>{tag}</p>
                </Tag>
              ))}
            </div>
          )}
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
          <a className="w-full" target="_blank" href={inviteLink}>
            {inviteLink !== "" ? (
              <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-400 px-4 py-1 font-medium text-high text-sm uppercase ring-surface-8 transition duration-300 ease-in-out hover:bg-primary-500 focus:outline-none focus:ring-1">
                <div className="flex items-center space-x-1">
                  <span>join</span>
                </div>
              </div>
            ) : (
              <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-surface-4 px-4 py-1 font-medium text-high text-sm uppercase ring-surface-8 transition duration-300 ease-in-out focus:outline-none focus:ring-1">
                <div className="flex items-center space-x-1">
                  <span>no link yet</span>
                </div>
              </div>
            )}
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-md -z-10 bg-surface-1 border border-surface-4" />
    </article>
  );
}
