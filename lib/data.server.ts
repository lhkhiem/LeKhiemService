import fs from 'fs';
import path from 'path';
import { SiteData, defaultSiteData } from './data';

const dataFilePath = path.join(process.cwd(), 'data', 'siteData.json');

export function getSiteDataServer(): SiteData {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileContent = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.error("Error reading siteData.json:", error);
  }
  return defaultSiteData;
}

export function saveSiteDataServer(data: SiteData): boolean {
  try {
    const dirPath = path.dirname(dataFilePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error("Error writing siteData.json:", error);
    return false;
  }
}
