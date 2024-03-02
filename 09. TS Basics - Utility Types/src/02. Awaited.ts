// Awaited is almost similar to async and await

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsersAPI(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

type getUserReturnType = Awaited<ReturnType<typeof getUsersAPI>>;

async function getUsers() {
  const users: getUserReturnType = await getUsersAPI();
  console.log(`Fetched Users: ${users.forEach((user) => console.log(user))}`);
}

getUsers();
