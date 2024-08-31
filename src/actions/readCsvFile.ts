'use server';

import { promises as fs } from 'node:fs';
import { parse } from 'csv-parse/sync';

export async function readCsvFile(filePath: string) {
  try {
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
    return [];
  }
}