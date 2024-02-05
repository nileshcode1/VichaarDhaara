import { PrismaClient } from "@prisma/client";
let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
 



//DATABASE_URL =
 // "mongodb+srv://nilesh:nilesh@cluster0.2z1amnh.mongodb.net/blog?retryWrites=true&w=majority";