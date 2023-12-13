import { join as pathJoin } from "https://deno.land/std@0.208.0/path/join.ts";
import links from "./links.ts";
const root: string = pathJoin(Deno.cwd(), "_site");
await Deno.mkdir(root, { recursive: true });
for (const [path, url] of links.entries()) {
	const file: Deno.FsFile = await Deno.create(pathJoin(root, path, "index.html"));
	await file.write(new TextEncoder().encode(`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${url}"></head><body></body></html>`));
}
