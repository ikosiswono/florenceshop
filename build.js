/**
 * Florence Shop — Build Script for Vercel & Static Hosting
 * Synchronizes web storefront assets into the standard `public/` output directory.
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const filesToCopy = [
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'sw.js',
  'icon.svg',
  'app-icon.png'
];

console.log('📦 Menyiapkan build static untuk Vercel...');

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(targetDir, file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✓ ${file} -> public/${file}`);
  } else {
    console.warn(`  ⚠ File ${file} tidak ditemukan di root.`);
  }
});

console.log('✅ Build selesai! Direktori public/ siap di-deploy ke Vercel.');
