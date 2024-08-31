export function ServerCard() {
  return (
    <article className="relative col-span-4 w-full overflow-hidden rounded-md p-3">
      <div className="relative z-10 space-y-3">
        <div className="grid grid-cols-[80px_1fr] items-center">
          <div className="h-[80px] w-[80px] bg-red-500">image</div>
          <div className="flex flex-col ml-4">
            <a className="text-2xl font-bold text-high line-clamp-1" href="/server/1129088474490884126">
              Repricle's Events
            </a>
            <div className="flex items-center space-x-1 text-sm text-medium">
              <span className="uppercase">en</span>
              <span className="after:content-[&quot;•&quot;]" />
              <span>6.2K members</span>
              <span className="after:content-[&quot;•&quot;]" />
              <span>140 votes</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <a href="/servers/tag/gaming">
            <div className="bg-surface-4 hover:bg-surface-6 cursor-pointer transition ease-in duration-100 inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-md text-high">
              <p>gaming</p>
            </div>
          </a>
          <a href="/servers/tag/community">
            <div className="bg-surface-4 hover:bg-surface-6 cursor-pointer transition ease-in duration-100 inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-md text-high">
              <p>community</p>
            </div>
          </a>
          <a href="/servers/tag/social">
            <div className="bg-surface-4 hover:bg-surface-6 cursor-pointer transition ease-in duration-100 inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-md text-high">
              <p>social</p>
            </div>
          </a>
          <a href="/servers/tag/giveaway">
            <div className="bg-surface-4 hover:bg-surface-6 cursor-pointer transition ease-in duration-100 inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-md text-high">
              <p>giveaway</p>
            </div>
          </a>
          <a href="/servers/tag/roblox">
            <div className="bg-surface-4 hover:bg-surface-6 cursor-pointer transition ease-in duration-100 inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-md text-high">
              <p>roblox</p>
            </div>
          </a>
        </div>
        <div className="min-h-[60px]">
          <p className="text-sm leading-5 text-high line-clamp-3">
            This is the best Roblox event server which includes huge giveaways and so many different people that you can
            communicate with!
          </p>
        </div>

        <div className="flex gap-2">
          <a className="w-full" href="/server/1129088474490884126">
            <div className="transition ease-in-out duration-300 rounded-md focus:outline-none border px-4 py-1 text-sm border-transparent w-full flex items-center justify-center bg-surface-4 hover:bg-surface-6 text-high focus:ring-1 ring-surface-8 font-medium uppercase">
              <div className="flex items-center space-x-1">
                <span>view</span>
              </div>
            </div>
          </a>
          <a className="w-full" target="_blank" href="/server/1129088474490884126/join">
            <div className="transition ease-in-out duration-300 rounded-md focus:outline-none border px-4 py-1 text-sm border-transparent w-full flex items-center justify-center bg-surface-4 hover:bg-surface-6 text-high focus:ring-1 ring-surface-8 font-medium uppercase">
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
