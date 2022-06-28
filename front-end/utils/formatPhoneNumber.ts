export const FormatPhoneNumber = (phoneNumber: string) => {
  const ddd = phoneNumber.substring(0, 2).trim()
  const prefixo = phoneNumber.substring(2, 3).trim()
  const part1 = phoneNumber.substring(3, 8).trim()
  const part2 = phoneNumber.substring(8, 12).trim()

  return `(${ddd}) ${prefixo} ${part1}-${part2}`
}
