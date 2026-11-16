# ⚔️ Florence Shop — Minecraft Top-Up & Digital Store

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fflorence-minecraft-store)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)]()
[![Platform](https://img.shields.io/badge/Minecraft-Java%20%26%20Bedrock-brightgreen.svg)]()

Platform web store modern, responsif, dan interaktif yang dirancang khusus untuk pembelian item, 12 Tier Rank resmi, koin in-game, dan crate keys pada server Minecraft (Java & Bedrock Edition) dengan sistem transaksi dan pengiriman otomatis.

---

## ⚡ Panduan Deploy Cepat ke Vercel (`.vercel.app`)

Website ini dirancang menggunakan standar murni **Vanilla Web (HTML/CSS/JS)** tanpa build-step yang rumit, sehingga dapat langsung di-deploy ke Vercel dalam waktu kurang dari 1 menit!

### Cara 1: Deploy Otomatis via GitHub (Sangat Direkomendasikan)
1. **Upload folder proyek ini ke GitHub** (lihat panduan push ke GitHub di bawah).
2. Buka dashboard [Vercel](https://vercel.com) dan login (bisa langsung login menggunakan akun GitHub Anda).
3. Klik tombol **"Add New..."** lalu pilih **"Project"**.
4. Pilih repositori GitHub Anda (`florence-minecraft-store`) dan klik **"Import"**.
5. Pada pengaturan proyek:
   - **Framework Preset**: Pilih `Other` (atau biarkan default).
   - **Root Directory**: `./` (biarkan default).
   - **Build Command**: Kosongkan (karena menggunakan vanilla HTML/CSS/JS).
   - **Output Directory**: Kosongkan (biarkan default).
6. Klik tombol **"Deploy"**.
7. Selesai! Website Anda langsung aktif di domain gratis seperti `florence-minecraft-store.vercel.app`. Setiap kali Anda melakukan update/push di GitHub, Vercel akan otomatis meng-update website secara instan!

---

### Cara 2: Deploy Langsung via Vercel CLI (Dari Terminal)
Jika Anda memiliki akun Vercel dan ingin deploy langsung dari terminal komputer Anda:
```bash
cmd.exe /c "npx vercel"
```
Ikuti instruksi singkat di layar:
1. `Set up and deploy?` Ketik **Y** lalu tekan Enter.
2. Login ke akun Vercel Anda melalui browser yang terbuka.
3. Pilih scope/akun Anda.
4. `Link to existing project?` Ketik **N**.
5. Masukkan nama proyek: `florence-minecraft-store`.
6. `In which directory is your code located?` Tekan **Enter** (default `./`).
7. Selesai! Link deployment Vercel akan langsung ditampilkan di terminal.

---

## 📱 Dukungan Mobile App (Progressive Web App / PWA)

Website ini sudah dilengkapi fitur PWA standar industri sehingga dapat diunduh dan dipasang sebagai **Aplikasi Mobile Mandiri** di Android dan iOS (iPhone/iPad):

1. **Aplikasi Standalone**: Berjalan dalam jendela aplikasi khusus tanpa address-bar browser, terasa seperti aplikasi native dari Play Store.
2. **Mobile Dock (Bottom Navigation Bar)**: Bar navigasi bawah layar (Beranda, Store, Ranks, Invoice, Keranjang) dengan haptic feedback getar sentuhan yang nyaman digunakan satu tangan di HP.
3. **Modal Bottom-Sheet**: Tampilan modal checkout berubah menjadi lembaran laci bawah (*bottom sheet*) yang ergonomis di layar ponsel.
4. **Service Worker Caching (`sw.js`)**: Aset web dicache secara lokal sehingga website terbuka seketika dan tetap dapat diakses meski jaringan lambat.
5. **Cara Pasang di HP**:
   - **Android (Chrome/Edge)**: Klik tombol pop-up **"Pasang App"** atau pilih menu browser **"Pasang Aplikasi" / "Tambahkan ke Layar Utama"**.
   - **iOS (Safari)**: Tap ikon **Share (Bagikan)** di Safari ➔ pilih **"Add to Home Screen" (Tambahkan ke Layar Utama)**.

---

## 🐙 Panduan Upload Repositori ke GitHub

Jika Anda belum memasukkan proyek ini ke GitHub, pilih salah satu metode termudah berikut:

### Opsi A: Menggunakan Git CLI
Buka Terminal / Command Prompt di folder proyek ini:
```bash
# 1. Inisialisasi Git
git init

# 2. Tambahkan semua file
git add .

# 3. Buat commit pertama
git commit -m "feat: initial release Florence Minecraft Store with 12 rank tiers"

# 4. Ganti branch utama ke main
git branch -M main

# 5. Hubungkan ke repositori GitHub Anda (buat repositori baru di github.com terlebih dahulu)
git remote add origin https://github.com/<username-github-anda>/florence-minecraft-store.git

# 6. Push kode ke GitHub
git push -u origin main
```

*(Catatan: Jika komputer Anda belum terpasang Git, Anda dapat menginstalnya dengan perintah `winget install --id Git.Git -e --source winget` di PowerShell).*

### Opsi B: Menggunakan GitHub Desktop (Mudah Tanpa Command)
1. Unduh dan buka [GitHub Desktop](https://desktop.github.com/).
2. Pilih menu **File** -> **Add Local Repository...**.
3. Pilih folder `c:\Users\marce\Videos\Florence Shop`.
4. Jika muncul peringatan repositori belum ada, klik **create a repository**.
5. Klik tombol **Publish repository** ke akun GitHub Anda.

---

## 👑 12 Tier Rank Resmi (Permanen / Lifetime)

Preservasi penuh data rank server Minecraft dengan tekstur item asli dan perintah konsol LuckPerms:

| No | Nama Rank | Harga | Diskon | Badge | Ikon Tekstur | Perintah Server (LuckPerms) | Benefit Utama |
|---|---|---|---|---|---|---|---|
| 1 | **Rank Novice (Noob)** | **Rp 5.000** | 50% (Rp 10.000) | `NEW` | Wooden Sword | `lp user {ign} parent add noob` | 3 Perintah (/feed, /heal, /clear), $25.000, Starter Kit, [Novice] |
| 2 | **Rank Stone** | **Rp 10.000** | 33% (Rp 15.000) | `TIER 2` | Stone Pickaxe | `lp user {ign} parent add stone` | 4 Perintah (+/day), $50.000, Miner Kit, +1.000 Claim Blocks, [Stone] |
| 3 | **Rank Iron** | **Rp 15.000** | 25% (Rp 20.000) | `TIER 3` | Iron Ingot | `lp user {ign} parent add iron` | 5 Perintah (+/weather), $100.000, Iron Kit, 2 Homes, +1.500 Claim, [Iron] |
| 4 | **Rank Gold** | **Rp 20.000** | 20% (Rp 25.000) | `HOT` | Gold Ingot | `lp user {ign} parent add gold` | 6 Perintah (+/nv), $250.000, Gold Kit + GApple, 3 Homes, +2.500 Claim, [Gold] |
| 5 | **Rank Diamond** | **Rp 25.000** | 29% (Rp 35.000) | `BEST VALUE` | Diamond Gem | `lp user {ign} parent add diamond` | 7 Perintah (+/ec), $500.000, Diamond Kit, /workbench, 5 Homes, +4.000 Claim, [Diamond] |
| 6 | **Rank Water** | **Rp 30.000** | 25% (Rp 40.000) | `ELEMENTAL` | Heart of the Sea | `lp user {ign} parent add water` | 8 Perintah (+haste), Water Breathing pasif, $850.000, Ocean Kit, +5.000 Claim, [Water] |
| 7 | **Rank Fire** | **Rp 35.000** | 22% (Rp 45.000) | `ELEMENTAL` | Blaze Rod | `lp user {ign} parent add fire` | 9 Perintah (Unlimited Warp), Fire Resistance pasif, $1.250.000, Fire Kit, +6.000 Claim, [Fire] |
| 8 | **Rank Nether** | **Rp 40.000** | 27% (Rp 55.000) | `NETHER TIER` | Netherite Ingot | `lp user {ign} parent add nether` | 11 Perintah (/fly survival, +fireres), Portal Nether & Loot, $1.750.000, +8.000 Claim, [Nether] |
| 9 | **Rank End** | **Rp 55.000** | 27% (Rp 75.000) | `POPULAR` | Eye of Ender | `lp user {ign} parent add end` | 12 Perintah (/fly all world, +hov), Slow Falling & Anti-Fall, $2.500.000, Shulker + 32 Pearls, +12.000 Claim, [End] |
| 10 | **Rank Space** | **Rp 85.000** | 23% (Rp 110.000) | `COSMIC TIER` | Elytra Wings | `lp user {ign} parent add space` | 13 Perintah (/fly, /craft, +speed, +jump), Helm Astronot Glow, $3.250.000, +18.000 Claim, [Space] |
| 11 | **Rank VIP** | **Rp 100.000** | 26% (Rp 135.000) | `POPULAR` | Golden Helmet | `lp user {ign} parent add vip` | 14 Perintah (/fly, /craft, /repair), Priority Queue Bypass, $4.000.000, Semua Kit Bawah, +25.000 Claim, [VIP] |
| 12 | **Florence Monarch (Legend)** | **Rp 150.000** | 25% (Rp 200.000) | `LEGENDARY` | Nether Star | `lp user {ign} parent add legend` | 15 Perintah Sultan (Akses SEMUA fitur), Auto-Totem saat kritis, Global Login Banner, Private Lounge, $5.000.000, +50.000 Claim, Chat Tag Emas-Cyan [FLORENCE MONARCH] |

---

## 📦 Preservasi Kategori Tambahan

Selain 12 Tier Rank, sistem tetap mempertahankan kategori pendukung ekonomi server:
- **Crate Keys:** 5x Legendary Keys (Rp 25.000) & 10x Epic Keys (Rp 30.000).
- **In-Game Currency:** 500.000 Coins (Rp 25.000) & 1.500.000 Coins (Rp 65.000).
- **Special Items & Kits:** God Weapon & PvP Kit (Rp 45.000).
- **Bundles:** Starter Pack Pemula (Rp 35.000).

---

## 🛠️ Alur Arsitektur Pembayaran & Delivery Server

```
[ Pelanggan (Web Browser) ]
            │
            ▼
    [ Frontend Web (Vercel) ]  (index.html, style.css, script.js)
            │
            ▼
 [ Supabase Edge Functions ]  (REST API & Webhook Handler)
     │                  │
     ▼                  ▼
[ Supabase DB ]    [ Midtrans Snap API ]
 (PostgreSQL)           │  (QRIS, VA, E-Wallet)
     │                  │
     │ ◄─── Webhook ────┘  (SHA-512 Signature Verification)
     │
     ▼
[ Minecraft RCON Bridge / Worker ]
     │
     ▼
[ Minecraft Server (Spigot / Paper / Velocity / Bedrock) ]
  -> Menjalankan perintah lp user {ign} parent add ...
```

---

## 🌐 Custom Domain di Vercel (Opsional)
Jika Anda memiliki domain server sendiri (misal: `store.florenceshop.net` atau `shop.namaserver.com`):
1. Masuk ke proyek Anda di dashboard Vercel -> **Settings** -> **Domains**.
2. Masukkan domain/subdomain Anda (misal `store.florenceshop.net`).
3. Tambahkan DNS Record CNAME yang diberikan oleh Vercel ke panel domain Anda (seperti Cloudflare, Niagahoster, Rumahweb, dll.).
4. Sertifikat SSL HTTPS otomatis diterbitkan gratis oleh Vercel!
