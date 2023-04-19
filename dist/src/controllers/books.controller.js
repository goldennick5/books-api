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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_model_1 = require("../models/books.model");
const router = express_1.default.Router();
router.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, books_model_1.getAllBooks)();
        res.status(200).json(books);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('server error');
    }
}));
router.get('/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const book = yield (0, books_model_1.getBookById)(parseInt(id));
        if (book) {
            res.json(book);
        }
        else {
            res.status(404).json({
                message: 'book not found'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('server error');
    }
}));
router.post('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.body.title;
        const author = req.body.author;
        const content = req.body.content;
        const book = yield (0, books_model_1.createBook)(title, author, content);
        console.log(book);
        res.json(book);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('server error');
    }
}));
exports.default = router;
