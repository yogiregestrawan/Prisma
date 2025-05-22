// index.js
const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()

// use `prisma` in your application to read and write data in your DB

async function main() {
  // CREATE (Insert user)
  // await prisma.user.create({
  //   data: {
  //     name: "ado",
  //     email: "ado@example.com"
  //   }
  // });

  // READ (Ambil semua user)
  const users = await prisma.user.findMany();
  console.log("Daftar user:", users);

  // UPDATE (Ubah nama user)
  // await prisma.user.update({
  //   where: { email: "hehe@example.com" },
  //   data: { name: "Jane Doe" }
  // });

  // DELETE (Hapus user)
  // await prisma.user.delete({
  //   where: { email: "john@example.com" }
  // });

  console.log("CRUD selesai dijalankan.");
}

async function fetchPosts() {
  const posts = await prisma.post.findMany({
    include: {
      user: true
    }
  });
  console.log(posts);
}

async function joinUserPosts() {
  const userPosts = await prisma.user.findMany({
    include: {
      posts: true
    }
  });
  console.log("User dengan Post:", userPosts);
}

async function executeTransaction() {
  const transaction = await prisma.$transaction(async (prisma) => {
    const newUser = await prisma.user.create({
      data: {
        name: "Helo",
        email: "hello@example.com"
      }
    });

    const newPost = await prisma.post.create({
      data: {
        title: "Pagi yang indah",
        content: "Ini cerita yang baru",
        userId: newUser.id
      }
    });

    return { newUser, newPost };
  });
  console.log("Transaction result:", transaction);
}

async function manipulateJSON() {
  const user = await prisma.user.findUnique({
    where: { email: "ado@example.com" }
  });

  if (user) {
    const userJSON = JSON.stringify(user);
    console.log("User dalam format JSON:", userJSON);
  }
}

// Skrip migrasi
async function migrate() {
  // Implementasi migrasi
  console.log("Migrasi selesai.");
}

// Skrip seeder
async function seed() {
  // Implementasi seeder
  console.log("Seeder selesai.");
}

// Panggil fungsi migrasi dan seeder
migrate();
seed();
main();
joinUserPosts();
executeTransaction();
// manipulateJSON();
// fetchPosts();