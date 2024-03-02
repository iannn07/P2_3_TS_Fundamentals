// Utility in TS

interface basicsDataType {
  userID: number;
  userName: string;
  verified?: boolean;
}

// Partial Types
const partialAssignment = (
  assign: basicsDataType,
  updateProp: Partial<basicsDataType>
): basicsDataType => {
  return { ...assign, ...updateProp };
};

const updatePartialUser: basicsDataType = {
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
const updateRequiredUser = (
  value: Required<basicsDataType>
): basicsDataType => {
  return value;
};

console.log(
  `Required Assignment: ${JSON.stringify(
    updateRequiredUser({
      ...updateVerifiedStatus,
      userName: "Updated by Required",
      verified: true,
    })
  )}`
);

// Readonly Types
const updateReadonlyUser: Readonly<basicsDataType> = {
  ...updateVerifiedStatus,
  userName: "Updated by Readonly",
  verified: true,
};

console.log(`Readonly Assignment: ${JSON.stringify(updateReadonlyUser)}`);

// You can't do the following
// updateReadonlyUser.verified = false;
// updateReadonlyUser.userID = 2;
// updateReadonlyUser.userName = "Jane Doe";

// Record Types
const users: Record<number, basicsDataType> = {
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

// Another example
type lastUserName = "Potter" | "Johnson";
type verified = "verified" | "unverified";
type satisfied = 1 | 2 | 3 | 4 | 5;

const recordUser: Record<lastUserName, verified> = {
  Potter: "verified",
  Johnson: "unverified",
};

const recordUser2: Record<lastUserName, satisfied> = {
  Potter: 1,
  Johnson: 5,
};

console.log(`Record Assignment (Verified): ${JSON.stringify(recordUser)}`);
console.log(`Record Assignment (Satisfied): ${JSON.stringify(recordUser2)}`);

// Pick and Omit
type dataTypePick = Pick<basicsDataType, "userID" | "userName">;

const dataTypeScore: dataTypePick = {
  userID: 1,
  userName: "Ian",
};

type dataTypeOmit = Omit<basicsDataType, "verified" | "userID">;

const dataTypeScore2: dataTypeOmit = {
  userName: "IAN",
};

console.log(`Pick: ${JSON.stringify(dataTypeScore)}`);
console.log(`Omit: ${JSON.stringify(dataTypeScore2)}`);

// Exclude and Extract
type dataTypeExclude = Exclude<satisfied, 1>;
type dataTypeExtract = Extract<satisfied, 5 | 6>;

// Return Type
const createSomethingNew = (title: string, coin: number) => {
  return { title, coin };
};
type somethingNewReturnType = ReturnType<typeof createSomethingNew>;

const somethingNew: somethingNewReturnType = createSomethingNew(
  "Something New",
  500
);

console.log(`Return Type: ${JSON.stringify(somethingNew)}`);

// Parameters
type somethingNewParameter = Parameters<typeof createSomethingNew>;

const somethingNewParam:somethingNewParameter = ["Something New", 500];
