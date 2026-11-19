import "dotenv/config";

async function main(): Promise<void> {
  const key = process.env.TRELLO_KEY?.trim();
  const token = process.env.TRELLO_TOKEN?.trim();

  const missing: string[] = [];
  if (!key) missing.push("TRELLO_KEY");
  if (!token) missing.push("TRELLO_TOKEN");

  if (missing.length > 0) {
    console.log(`Missing: ${missing.join(", ")}`);
    console.log("Copy .env.example to .env and fill in the values.");
    process.exit(1);
  }

  // The URL contains the key and token, so it is never printed.
  const url = new URL("https://api.trello.com/1/members/me/boards");
  url.searchParams.set("key", key as string);
  url.searchParams.set("token", token as string);

  let response: Response;
  try {
    response = await fetch(url);
  } catch {
    console.log("HTTP status: none (the request did not reach Trello)");
    console.log("Hint: check your internet connection and try again.");
    process.exit(1);
  }

  if (!response.ok) {
    console.log(`HTTP status: ${response.status}`);
    console.log(hintFor(response.status));
    process.exit(1);
  }

  const boards: unknown = await response.json();
  const count = Array.isArray(boards) ? boards.length : 0;

  console.log(`Node version: ${process.version}`);
  console.log(`HTTP status: ${response.status}`);
  console.log(`Boards returned: ${count}`);
  console.log("PASS");
}

function hintFor(status: number): string {
  if (status === 401) {
    return "Hint: Trello rejected your key or token. Check TRELLO_KEY and TRELLO_TOKEN in .env.";
  }
  if (status === 429) {
    return "Hint: too many requests. Wait a minute and try again.";
  }
  if (status >= 500) {
    return "Hint: Trello is having problems. Try again later.";
  }
  return "Hint: the request failed. Check the values in .env.";
}

main();
