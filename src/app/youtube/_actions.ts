"use server"
import { readCsvFile } from "@/actions/readCsvFile";

export async function getYoutubeData() {
  return await readCsvFile("youtube-channels.csv");
}