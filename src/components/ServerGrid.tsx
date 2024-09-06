"use client"
import { useServerSearchStore } from "@/stores/serverSearchStore";
import { useEffect } from "react";
import { ServerCard } from "./ServerCard";

export function ServerGrid() {
  const { filteredServers, fetchServers, isLoading } = useServerSearchStore();

  useEffect(() => {
    fetchServers();
  }, [fetchServers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-5 md:grid-cols-8 xl:grid-cols-12">
      {filteredServers.map((serverCard) => (
        <ServerCard key={serverCard.title} serverCard={serverCard} />
      ))}
    </div>
  );
}
