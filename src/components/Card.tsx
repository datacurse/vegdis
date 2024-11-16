import { IServerCard } from "@/interfaces";
import { Pill } from "./Pill";
import React from "react";

export function Card({ card }: { card: IServerCard }) {
  // Create array of active attributes
  const attributes = [
    { key: 'verification', label: 'verification', value: card.verification },
    { key: 'adultsOnly', label: 'adults only', value: card.adultsOnly },
    { key: 'nsfw', label: 'nsfw', value: card.nsfw },
  ].filter(attr => attr.value);

  return (
    <div className="relative col-span-4 w-full overflow-hidden rounded-md p-4 bg-[#232528] flex flex-col space-y-4">
      <div className="flex flex-row space-x-4">
        <div className="relative overflow-hidden rounded-md h-[80px] w-[80px]" style={{ width: 80, height: 80 }}>
          <img
            alt={`${card.title} server icon`}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="absolute h-full w-full inset-0"
            src={card.iconSrc}
          />
        </div>
        <div className="flex flex-col justify-between " >
          <div className="text-2xl">{card.title}</div>

          {attributes.length > 0 && (
            <div className="flex flex-row space-x-2 text-[#656a71]">
              {attributes.map((attr, index) => (
                <React.Fragment key={attr.key}>
                  {index > 0 && <div className="text-[#D2D2D2]">/</div>}
                  <div>{attr.label}</div>
                </React.Fragment>
              ))}
            </div>
          )}
          <div className="flex flex-row space-x-2">
            <div>{card.members}</div>
            <div className="text-[#656a71]">members</div>
          </div>
        </div>
      </div>
      <div className="min-h-[60px]">
        <p className="!leading-5 line-clamp-3">{card.description}</p>
      </div>
      <div className="flex flex-row justify-between space-x-4 ">
        <div className="bg-[#383A40] text-[#D2D2D2] w-full flex items-center justify-center rounded-lg p-2">
          view
        </div>
        <div className="bg-[#D2D2D2] text-[#383A40] w-full flex items-center justify-center rounded-lg p-2">
          join
        </div>
      </div>
    </div>
  )
}