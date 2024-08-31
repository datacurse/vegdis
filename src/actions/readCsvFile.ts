"use server";
import { promises as fs } from 'node:fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

export async function readCsvFile(fileName: string) {
  try {
    // Construct the correct file path
    const filePath = path.join(process.cwd(), 'public', 'csv', fileName);

    // Read the file content
    const fileContent = await fs.readFile(filePath, 'utf-8');

    // Parse the CSV content
    const records = parse(fileContent, {
      columns: true, // Treat the first row as headers
      skip_empty_lines: true
    });

    return records;
  } catch (error) {
    console.error('Failed to read CSV file', error);
    throw error; // Propagate the error instead of returning an empty array
  }
}