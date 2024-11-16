"use server";
import { parseServerCards } from "@/actions/parseServerCard";
import { readCsvFile } from "@/actions/readCsvFile";
import { Search } from "@/components/filter/Search";
import { ServerGrid } from "@/components/ServerGrid";
import { Sort } from "@/components/filter/Sorting";
import { Filters } from "@/components/filter/Filters";

export default async function HomePage() {
  const serverCardsRaw = await readCsvFile("servers.csv");
  const serverCards = parseServerCards(serverCardsRaw);
  console.log(serverCards);

  return (
    <body>
      <div className="flex min-h-screen flex-col bg-[#111214]">
        <div>
          <header className="flex h-20 w-full items-center border-transparent border-b bg-transparent transition duration-200 ease-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center justify-between">
                <div className="text-4xl text-[#D2D2D2]">Vegan Discord Servers</div>
                <div className="flex flex-row space-x-4">
                  {/* <a href="/login"> */}
                  <div className="rounded-md border border-transparent bg-[#383A40] px-4 py-2 text-md text-white transition duration-300 ease-in-out hover:bg-[#4f525a] select-none cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                      </svg>
                      <span>Login with Discord</span>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </nav>
            </div>
          </header>
          <div className="container mx-auto mb-10 flex-1 px-4 sm:px-6 lg:px-8">
            <main>
              <Search />

              <div className="flex flex-row justify-between mt-4">
                <Sort />
                <Filters />
              </div>


              <div className="my-12 space-y-10">
                <section className="space-y-5">
                  <ServerGrid />
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </body>
  );
}