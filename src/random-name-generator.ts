/**
 * Generate a random name based on the specified options.
 * @param title - Whether to include the title in the name.
 * @param firstName - Whether to include the first name in the name.
 * @param lastName - Whether to include the last name in the name.
 * @returns A randomly generated name based on the specified options.
 * @example
 * ```typescript
 * const name = randomName({ title: true, firstName: true, lastName: true });
 * console.log(name); // "Mr. John Doe"
 * ```
 */

import { Name, NameOptions } from "./types";

async function randomName({
  title,
  firstName,
  lastName,
}: NameOptions): Promise<Name> {
  const response = await fetch("https://api.randomuser.me/");
  const data = await response.json();

  const name = data.results.map(
    (user: { name: { title: string; first: string; last: string } }) => {
      if (title && firstName && lastName) {
        return `${user.name.title} ${user.name.first} ${user.name.last}`;
      } else if (title && firstName) {
        return `${user.name.title} ${user.name.first}`;
      } else if (title && lastName) {
        return `${user.name.title} ${user.name.last}`;
      } else if (firstName && lastName) {
        return `${user.name.first} ${user.name.last}`;
      } else if (title) {
        return `${user.name.title}`;
      } else if (firstName) {
        return `${user.name.first}`;
      } else if (lastName) {
        return `${user.name.last}`;
      } else {
        return `${user.name.first} ${user.name.last}`;
      }
    }
  )[0]; // Get the first item in the array since the API only returns one result but wraps it in an array

  return name || "John Doe"; // Return the name or a default name if the API fails
}

export default randomName;
