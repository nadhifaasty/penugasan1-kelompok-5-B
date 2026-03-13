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
git clone https://github.com/nadhifaasty/penugasan1-kelompok-5-B.git
cd penugasan1-kelompok-5-B
```

### 2. Buat Branch Pribadi
```bash
git checkout -b nama-kamu   # contoh: git checkout -b nadhifa
```

### 3. Sebelum Mulai Kerja — Selalu Pull Dulu
```bash
git pull origin main
```

### 4. Simpan Perubahan
```bash
git add .
git commit -m "feat: deskripsi singkat perubahan"   # contoh: feat: tambah halaman homepage
git push -u origin nama-kamu
```

### 5. Buat Pull Request (PR)
- Buka repo di GitHub
- Klik **"Compare & Pull Request"**
- Pastikan base branch-nya ke `frontend` atau `backend` (bukan `main`)
- Isi deskripsi → klik **Create Pull Request**

---
