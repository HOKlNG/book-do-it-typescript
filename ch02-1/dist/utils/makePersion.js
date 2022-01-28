"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePersion = exports.makePersion = void 0;
function makePersion(name, age) {
    return { name: name, age: age };
}
exports.makePersion = makePersion;
function testMakePersion() {
    console.log(makePersion('Jane', 22), makePersion('Jack', 33));
}
exports.testMakePersion = testMakePersion;
//# sourceMappingURL=makePersion.js.map