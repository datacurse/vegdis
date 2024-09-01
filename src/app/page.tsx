"use server";
import { parseServerCards } from "@/actions/parseServerCard";
import { readCsvFile } from "@/actions/readCsvFile";
import { ServerCard } from "@/components/ServerCard";
import type { IServerCard } from "@/interfaces";
import { IoSearchOutline } from "react-icons/io5";

export default async function HomePage() {
  const serverCardsRaw = await readCsvFile('servers.csv');
  const serverCards = parseServerCards(serverCardsRaw);
  console.log(serverCards)

  return (
    <body
      style={{
        backgroundColor: "rgb(30, 30, 34)",
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)",
        backgroundSize: "25px 25px",
        backgroundPosition: "-50px -50px",
      }}
    >
      <div className="flex min-h-screen flex-col">
        <div>
          {/* text-[rgba(103,58,183,.4)] */}
          <svg className="-z-10 pointer-events-none absolute inset-0 h-screen w-full text-[rgba(46,165,44,0.38)]">
            <defs>
              <linearGradient id="bg" gradientTransform="rotate(70)">
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <rect fill="url('#bg')" width="100%" height="100%" className="h-full w-full" />
          </svg>
          <header className="sticky top-0 z-40 flex h-20 w-full items-center border-transparent border-b bg-transparent transition duration-200 ease-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <a href="/">
                    <div className="flex items-center space-x-2 text-4xl text-high font-bold">Vegdis</div>
                  </a>
                  <ul className="hidden list-none space-x-6 md:flex">
                    <li>
                      <a className="text-medium capitalize hover:text-high" href="/servers">
                        servers
                      </a>
                    </li>
                    <li>
                      <a className="text-medium capitalize hover:text-high" href="/premium">
                        premium
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <a href="/login">
                    <div className="rounded-md border border-transparent bg-primary-400 px-4 py-2 text-md text-white ring-primary-800 transition duration-300 ease-in-out hover:bg-primary-500 focus:outline-none focus:ring-1">
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                        </svg>
                        <span>Login with Discord</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:hidden">
                  <nav className="flex items-center">
                    <button className="relative h-10 w-10 text-high focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <span
                          aria-hidden="true"
                          className="-translate-y-1.5 absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute block h-0.5 w-5 translate-y-1.5 transform bg-current transition duration-500 ease-in-out"
                        />
                      </div>
                    </button>
                  </nav>
                </div>
              </nav>
            </div>
          </header>
          <div className="container mx-auto mb-10 flex-1 px-4 sm:px-6 lg:px-8">
            <main>
              <div className="mb-6">
                <h1 className="text-3xl font-bold md:text-5xl text-high">
                  Start Exploring the Best Discord Servers Today!
                </h1>
                <p className="md:text-xl text-medium">
                  Browse thousands of the best Discord servers available and discuss topics you are interested in
                </p>
              </div>
              <div>
                <div className="flex space-x-2 items-center relative w-full flex-1 bg-surface-1 border border-surface-4 focus-within:border-primary-400 rounded-md transition ease-in duration-100 px-4 group">
                  <div>
                    <IoSearchOutline className="text-high w-6 h-6" />
                  </div>{" "}
                  <input
                    type="text"
                    placeholder="Search for the top servers..."
                    autoComplete="off"
                    className=" py-4 w-full bg-surface-1 outline-none focus:ring-0 focus:outline-none caret-white text-white placeholder-gray-400"
                    aria-autocomplete="list"
                    aria-labelledby="search-label"
                    id="search-input"
                  />
                </div>
              </div>
              <div className="my-12 space-y-10">
                <section className="space-y-5">
                  <div>
                    <h2 className="font-bold text-2xl text-high uppercase md:text-3xl">top voted servers</h2>
                    <p className="text-medium">The top voted Discord servers this month</p>
                  </div>
                  <div className="grid grid-cols-4 gap-5 md:grid-cols-8 xl:grid-cols-12">
                    {serverCards.map((serverCard) => (
                      <ServerCard key={serverCard.title} serverCard={serverCard} />
                    ))}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </body>
  );
}
