// DOM Assertion

/*
Shortly, TS wants everything to be more specific in typing, that'w why it's called a strongly typed language

In JS, we can jus do the DOM (Returns only an element) by using the following

const header = document.querySelector("header")
const container = document.getElementById("#container")

However, TS doesn't like that. So, we can do the following
*/

const header = document.querySelector("header")!;
const container = document.getElementById("#container") as HTMLElement;

header.innerHTML = "Hello";
container.innerHTML = "Hello";