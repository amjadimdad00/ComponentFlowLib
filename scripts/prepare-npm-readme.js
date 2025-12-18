import fs from "fs";

const npmReadme = "README.npm.md";
const mainReadme = "README.md";

try {
  // Copy npm README to README.md
  fs.copyFileSync(npmReadme, mainReadme);
  console.log("✅ Switched to npm README");

  // Delete the local npm README (optional, since npm only sees README.md)
  fs.unlinkSync(npmReadme);
  console.log("🗑 Deleted local README.npm.md");
} catch (err) {
  console.error("❌ Error preparing npm README:", err);
}
