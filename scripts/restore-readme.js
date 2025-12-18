import { execSync } from "child_process";

try {
  // Restore README.md from GitHub commit
  execSync("git checkout -- README.md", { stdio: "inherit" });

  // Restore README.npm.md from GitHub commit (if it existed in repo)
  execSync("git checkout -- README.npm.md", { stdio: "inherit" });

  console.log("✅ Restored GitHub README(s)");
} catch (err) {
  console.warn("⚠️ Could not restore README(s) automatically:", err.message);
}
