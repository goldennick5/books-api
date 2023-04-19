"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield prisma.book.findMany();
        return books;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma.book.findUnique({
            where: { id }
        });
        return book;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getBookById = getBookById;
const createBook = (title, author, content) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma.book.create({
            data: {
                title,
                author,
                content
            }
        });
        return book;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createBook = createBook;
