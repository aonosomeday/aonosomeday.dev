#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import { applyPostsToDatabase } from "./utils/posts.ts";

import "$std/dotenv/load.ts";

await applyPostsToDatabase()
console.info("Applied posts to Deno KV.");

await dev(import.meta.url, "./main.ts", config);
