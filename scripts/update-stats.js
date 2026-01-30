const fs = require("fs");
const fetch = require("node-fetch");

const USERNAME = "sophiabartolacci";
const OUTPUT_FILE = "top-langs.png"; // will be saved to repo root

const TOKEN = process.env.GH_TOKEN;

const url = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=tokyonight&hide_border=true&count_private=true`;

(async () => {
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch stats:", response.statusText);
    process.exit(1);
  }

  const buffer = await response.buffer();
  fs.writeFileSync(OUTPUT_FILE, buffer);
  console.log(`Saved stats image to ${OUTPUT_FILE}`);
})();
