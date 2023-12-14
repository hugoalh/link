import { dirname as pathDirName } from "std/path/dirname.ts";
import { join as pathJoin } from "std/path/join.ts";
import links from "./links.ts";
const root: string = pathJoin(Deno.cwd(), "_site");
await Deno.mkdir(root, { recursive: true });
for (const [pathRelative, url] of links.entries()) {
	const pathFull: string = pathJoin(root, pathRelative, "index.html");
	await Deno.mkdir(pathDirName(pathFull), { recursive: true });
	await Deno.writeFile(pathFull, new TextEncoder().encode(`<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="refresh" content="0; url=${url}" />
	<meta name="color-scheme" content="light dark" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<style>
		html {
			font-family: "Noto Sans", sans-serif;
		}

		header {
			background-color: #cfcfcf;
			border-radius: 8px;
			display: block;
			margin: 0px;
			padding: 8px;
		}

		header * {
			margin: 2px;
			padding: 0px;
		}

		header div.address {
			font-size: large;
			font-weight: bold;
		}

		@media (prefers-color-scheme: dark) {
			header {
				background-color: #2f2f2f;
			}
		}
	</style>
	<title>hxhS (hugoalh & hugoalh Studio) Link Service</title>
</head>

<body>
	<header>
		<div class="address">hxhS (hugoalh & hugoalh Studio) Link Service</div>
		<div>One of the network service endpoint of hxhS (hugoalh & hugoalh Studio). This endpoint is powered by <a href="https://pages.github.com" hreflang="en" target="_blank">GitHub Pages <sup>↗️</sup></a>.</div>
	</header>
	<p>Your browser seems dislike HTML redirections, <a href="${url}">please click here to continue.</a></p>
</body>

</html>`));
}
