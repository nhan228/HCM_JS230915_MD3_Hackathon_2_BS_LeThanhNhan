import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  createTodo: async ({ name, status }) => {
    try {
      return await prisma.todos.create({
        data: {
          name,
          status
        },
      });
    } catch (err) {
      throw new Error(`Lỗi tạo mới: ${err.message}`);
    }
  },

  getAllTodos: async () => {
    try {
      return await prisma.todos.findMany();
    } catch (err) {
      throw new Error(`Lỗi tìm kiếm ${err.message}`);
    }
  },

  getTodoById: async (id) => {
    try {
      return await prisma.todos.findUnique({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(`Lỗi tìm kiếm bằng id: ${err.message}`);
    }
  },

  updateTodo: async (id) => {
    try {
      return await prisma.todos.update({
        where: {
          id,
        },
        data: {
          status: 'Completed',
        },
      });
    } catch (err) {
      throw new Error(`Lỗi cập nhật: ${err.message}`);
    }
  },

  deleteTodo: async (id) => {
    try {
      return await prisma.todos.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(`Lỗi xóa: ${err.message}`);
    }
  },
};
