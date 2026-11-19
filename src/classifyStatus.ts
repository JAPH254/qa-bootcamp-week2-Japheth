/**
 * Returns the class of an HTTP status code, for example "2xx" for 200 or 204.
 *
 * The expected behaviour for invalid input (for example a negative number,
 * a decimal, or a code outside the HTTP range) is not defined here.
 * Decide it yourself in your test table before you implement this function.
 *
 * @param code The HTTP status code to classify.
 * @returns The status class, for example "2xx".
 */
export function classifyStatus(code: number): string {
  throw new Error("Not implemented");
}
