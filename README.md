# ORM Project

## Overview
Proyek ini mendemonstrasikan operasi CRUD dasar menggunakan Prisma ORM dengan database MySQL. Ini mencakup model untuk `User` dan `Post` dengan relasi yang telah ditentukan.

## Fitur
- **Create**: Menambahkan pengguna dan posting baru ke database.
- **Read**: Mengambil pengguna dan posting, termasuk data relasional.
- **Update**: Memodifikasi data pengguna yang ada.
- **Delete**: Menghapus pengguna dari database.
- **Join**: Mengambil data pengguna beserta postingannya menggunakan operasi Join.
- **Function**: Fungsi `fetchPosts` untuk mengambil semua postingan.
- **Procedure**: Tidak ada prosedur yang spesifik, tetapi fungsi `executeTransaction` menunjukkan penggunaan transaksi.
- **Transaction**: Menggunakan `prisma.$transaction` untuk melakukan operasi atomik.
- **JSON**: Mengubah data pengguna menjadi format JSON dengan `JSON.stringify(user)`.

## Cara Penggunaan
1. Pastikan Anda memiliki database MySQL yang berjalan dan perbarui `DATABASE_URL` di file `.env`.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Eksekusi `node index.cjs` untuk menjalankan operasi CRUD.

## Fitur Tambahan
- **Migrasi**: Gunakan Prisma Migrate untuk mengelola skema database Anda.
- **Seeding**: Tambahkan data awal ke database Anda menggunakan Prisma Seed.
- **Relationship**: Relasi antara model `User` dan `Post` sudah diimplementasikan dengan anotasi `@relation`.
- **Lazy Loading**: Untuk mengoptimalkan query dan hanya mengambil data yang diperlukan, Anda dapat menggunakan opsi `include` dalam query Prisma.

## Skema Prisma
File `schema.prisma` mendefinisikan model data dan relasinya.

## Penanganan Error
Kesalahan selama operasi database dicatat ke konsol.

## Disconnect
Klien Prisma terputus dari database setelah operasi selesai untuk mencegah koneksi terbuka.

## Panduan Pengguna
- **Instalasi**: Pastikan semua dependensi terinstal dengan benar.
- **Menjalankan Program**: Gunakan perintah `node index.cjs` untuk menjalankan program.
- **Fungsi Program**: Program ini memungkinkan Anda untuk melakukan operasi CRUD pada model `User` dan `Post`.
- **Penggunaan Prisma**: Prisma digunakan untuk mengelola dan mengakses database dengan cara yang efisien dan mudah.

Dengan mengikuti panduan ini, Anda dapat menjalankan program dan memahami fungsinya dengan lebih baik.
