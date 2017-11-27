export function classNames (names) {
  const filtered = names.filter((className) => !!className)
  return filtered.join(' ')
}
