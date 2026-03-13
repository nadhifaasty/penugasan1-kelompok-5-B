# 🗂️ Penugasan Praktikum 1 RSI – Git & Version Control

Repo ini dibuat untuk memenuhi **Penugasan Praktikum 1** tentang Git dan Version Control. Di dalamnya terdapat inisialisasi project backend (Poetry + Python) dan frontend (React + Next.js) beserta simulasi alur kerja Git secara tim.

---

## 👥 Anggota Kelompok

| No | Nama | NIM |
|----|------|-----|
| 1 | Ibrahim Syauqi | L0224019 |
| 2 | Jimly Syahbatin | L0224033 |
| 3 | Nadhifa Sakha Tri Yasmin | L0224036 |
| 4 | Kayla Maharani Muzaki | L0224050 |


---

## 🔧 Panduan Git untuk Anggota

> Gunakan **Git Bash** untuk semua perintah berikut.

### 1. Clone Repository *(sekali saja di awal)*
```bash
git clone https://github.com/username/praktikum-git-kelompok.git
cd praktikum-git-kelompok
```

### 2. Buat Branch Pribadi
```bash
git checkout -b nama-kamu   # contoh: git checkout -b talitha
```

### 3. Sebelum Mulai Kerja — Selalu Pull Dulu
```bash
git pull origin main
```

### 4. Simpan Perubahan
```bash
git add .
git commit -m "Deskripsi singkat perubahan"
git push -u origin nama-kamu
```

### 5. Buat Pull Request (PR)
- Buka repo di GitHub
- Klik **"Compare & Pull Request"**
- Isi deskripsi → klik **Create Pull Request**
- Tunggu review dan merge dari leader

---

## Rules

- Jangan kerja langsung di branch `main`
- Jangan hapus folder/file milik anggota lain
- Jangan hapus shapefile (banyak ekstensi)
- Setiap anggota hanya edit folder/notebook bagian sendiri di `/src`
- Folder kosong wajib ada file `.gitkeep` agar muncul di repo
- Kalau ganti device, lakukan `git pull` sebelum mulai edit
