import { dirname as pathDirName } from "https://deno.land/std@0.208.0/path/dirname.ts";
import { join as pathJoin } from "https://deno.land/std@0.208.0/path/join.ts";
import links from "./links.ts";
const root: string = pathJoin(Deno.cwd(), "_site");
await Deno.mkdir(root, { recursive: true });
for (const [pathRelative, url] of links.entries()) {
	const pathFull: string = pathJoin(root, pathRelative, "index.html");
	await Deno.mkdir(pathDirName(pathFull), { recursive: true });
	await Deno.writeFile(pathFull, new TextEncoder().encode(`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${url}"></head><body></body></html>`));
}
