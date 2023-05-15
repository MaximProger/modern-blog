export function capitalized(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');