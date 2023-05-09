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
const prisma_1 = require("../src/db/prisma");
const userNames = ["Matt", "Karolina"];
const createUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("creating users...");
    for (const name of userNames) {
        yield prisma_1.prisma.user.upsert({
            where: {
                name
            },
            create: {
                name
            },
            update: {
                name
            }
        });
    }
});
const activities = [
    {
        name: "Bieganie",
        value: 1
    },
    {
        name: "Rower",
        value: 0.5
    }
];
const createActivities = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("creating activities...");
    for (const activity of activities) {
        yield prisma_1.prisma.activities.upsert({
            where: {
                name: activity.name
            },
            create: Object.assign({}, activity),
            update: Object.assign({}, activity)
        });
    }
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createUsers();
        yield createActivities();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () { return yield main(); }))();
