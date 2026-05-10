#!/usr/bin/env node
/**
 * Installer for @ojesusmp/marketing-council Claude Code skill.
 *
 * Run via: npx @ojesusmp/marketing-council
 *
 * Copies the skill files into ~/.claude/skills/marketing-council/ so
 * Claude Code discovers the skill on next session.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'marketing-council';
const SKILL_FILES = ['SKILL.md', 'README.md', 'LICENSE'];

const sourceDir = __dirname;
const targetDir = path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);

function main() {
  console.log(`Installing ${SKILL_NAME} to ${targetDir}`);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`  created ${targetDir}`);
  }

  let copied = 0;
  for (const file of SKILL_FILES) {
    const src = path.join(sourceDir, file);
    const dst = path.join(targetDir, file);
    if (!fs.existsSync(src)) {
      console.warn(`  skipped ${file} (not in package)`);
      continue;
    }
    fs.copyFileSync(src, dst);
    console.log(`  copied ${file}`);
    copied++;
  }

  console.log(`\nInstalled ${copied} file(s).`);
  console.log(`Restart Claude Code (or reload skills) to pick up the new skill.`);
  console.log(`Invoke with: /marketing-council "<product or offer to sell>"`);
}

try {
  main();
} catch (err) {
  console.error(`Install failed: ${err.message}`);
  process.exit(1);
}
