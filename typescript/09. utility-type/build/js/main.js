"use strict";
// Partial, Pick, Omit, Exclude, Required...
const me = {};
const you = { email: "abc@example.com" };
const all = { email: "abc@example.com", address: "abc" };
const todo = {
    title: "clean room",
    completed: false,
};
const todo1 = {
    title: "clean room",
    completed: false,
    createAt: 20241209,
};
let firstUser = {
    firstName: "Hyoju",
};
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
function fn(str) {
    return str;
}
const a = "string";
// const b: ReturnType<typeof fn> = true; // error
