interface HXHSLinkMeta {
	description: string;
	paths: Set<string>;
}
const links: Record<string, HXHSLinkMeta> = {
	"https://forms.gle/AXq9hWq2DsJrDNjP7": {
		description: "hxhS (hugoalh & hugoalh Studio) Assistance Request Form",
		paths: new Set([
			"assistance_form",
			"assistance_request",
			"assistance-form",
			"assistance-request",
			"form/assistance",
			"request/assistance"
		])
	},
	"https://github.com/hugoalh/link": {
		description: "source of this website",
		paths: new Set([""])
	}
};
export default links;
