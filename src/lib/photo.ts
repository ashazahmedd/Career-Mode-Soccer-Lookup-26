// Builds a direct image URL for a Wikimedia Commons file title via the
// Special:FilePath redirect, which serves a resized thumbnail. These files
// are freely licensed (CC BY / CC BY-SA) for reuse with attribution.
export function commonsUrl(fileTitle: string, width = 200): string {
  const normalized = fileTitle.trim().replace(/ /g, "_");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(normalized)}?width=${width}`;
}
