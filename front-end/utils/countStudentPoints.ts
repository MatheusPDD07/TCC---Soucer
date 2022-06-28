export const StudentLevel = (points: number) => {
  let goal = 1000 as number
  let level = 1 as number

  for (let i = 0; points > goal; i++) {
    goal += 1000
    level++
  }

  return { goal, level }
}
