"use strict";
// Utility in TS
// Partial Types
const partialAssignment = (assign, updateProp) => {
    return Object.assign(Object.assign({}, assign), updateProp);
};
const updatePartialUser = {
    userID: 1,
    userName: "John Doe",
    verified: true,
};
console.log(`Before Update Assignment: ${JSON.stringify(updatePartialUser)}`);
// Update the verified status
const updateVerifiedStatus = partialAssignment(updatePartialUser, {
    verified: false,
});
console.log(`After Update Assignment: ${JSON.stringify(updateVerifiedStatus)}`);
// Required Types
const updateRequiredUser = (value) => {
    return value;
};
console.log(`Required Assignment: ${JSON.stringify(updateRequiredUser(Object.assign(Object.assign({}, updateVerifiedStatus), { userName: "Updated by Required", verified: true })))}`);
// Readonly Types
const updateReadonlyUser = Object.assign(Object.assign({}, updateVerifiedStatus), { userName: "Updated by Readonly", verified: true });
console.log(`Readonly Assignment: ${JSON.stringify(updateReadonlyUser)}`);
// You can't do the following
// updateReadonlyUser.verified = false;
// updateReadonlyUser.userID = 2;
// updateReadonlyUser.userName = "Jane Doe";
// Record Types
const users = {
    1: {
        userID: 1,
        userName: "John Doe",
        verified: true,
    },
    2: {
        userID: 2,
        userName: "Jane Doe",
        verified: false,
    },
};
console.log(`Record Assignment: ${JSON.stringify(users)}`);
const recordUser = {
    Potter: "verified",
    Johnson: "unverified",
};
const recordUser2 = {
    Potter: 1,
    Johnson: 5,
};
console.log(`Record Assignment (Verified): ${JSON.stringify(recordUser)}`);
console.log(`Record Assignment (Satisfied): ${JSON.stringify(recordUser2)}`);
const dataTypeScore = {
    userID: 1,
    userName: "Ian",
};
const dataTypeScore2 = {
    userName: "IAN",
};
console.log(`Pick: ${JSON.stringify(dataTypeScore)}`);
console.log(`Omit: ${JSON.stringify(dataTypeScore2)}`);
// Return Type
const createSomethingNew = (title, coin) => {
    return { title, coin };
};
const somethingNew = createSomethingNew("Something New", 500);
console.log(`Return Type: ${JSON.stringify(somethingNew)}`);
const somethingNewParam = ["Something New", 500];
