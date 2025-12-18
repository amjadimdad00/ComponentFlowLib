import fs from "fs";
import path from "path";

const iconsDir = path.join(path.resolve(), "src/icons");
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".tsx"));

for (const file of files) {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // 1️⃣ Remove any previous React import (normal or namespace)
  content = content.replace(/import \* as React from ["']react["'];\n?/, "");
  content = content.replace(/import { SVGProps } from ["']react["'];\n?/, "");
  content = content.replace(
    /import type { SVGProps } from ["']react["'];\n?/,
    ""
  );

  // 2️⃣ Add only type import at the top
  content = "import type { SVGProps } from 'react';\n\n" + content;

  // 3️⃣ Ensure return type JSX.Element
  content = content.replace(
    /(const\s+\w+\s*=\s*\(props: SVGProps<SVGSVGElement>\))/,
    "$1: JSX.Element"
  );

  fs.writeFileSync(filePath, content);
}

console.log("All icons fixed ✅");
