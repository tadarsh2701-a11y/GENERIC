import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://velvetandember.app';
const currentDate = new Date().toISOString().split('T')[0];

// Static core routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/topics', priority: '0.9', changefreq: 'daily' },
  { path: '/pathways', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' }
];

// Extract all slugs from the topics data files
const topicsDataDir = path.resolve(__dirname, '../src/data');
const topicFiles = [
  'topics-cat1.ts',
  'topics-cat2.ts',
  'topics-cat3.ts',
  'topics-cat4.ts',
  'topics-cat5.ts',
  'topics-cat6.ts',
  'topics-cat7.ts',
  'topics-cat8.ts'
];

const topicSlugs = [];

for (const file of topicFiles) {
  const filePath = path.join(topicsDataDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
    for (const match of slugMatches) {
      if (match[1]) {
        topicSlugs.push(match[1]);
      }
    }
  }
}

console.log(`Found ${topicSlugs.length} topic slugs for sitemap.`);

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Add static routes
for (const route of staticRoutes) {
  xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
}

// Add all 101 topic routes
for (const slug of topicSlugs) {
  xml += `  <url>
    <loc>${BASE_URL}/topic/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

xml += `</urlset>
`;

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${staticRoutes.length + topicSlugs.length} URLs at: ${sitemapPath}`);
