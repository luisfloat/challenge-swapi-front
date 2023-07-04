export function truncateString(
  text: string | null | undefined,
  maxLength: number
): string | null {
  if (!text) {
    return null;
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
}
