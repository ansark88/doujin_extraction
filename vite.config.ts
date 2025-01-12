import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: resolve(__dirname, "./lib/index.ts"),
			name: "doujin_extraction",
			fileName: "index",
			formats: ["es", "umd"],
		},
	},
});
