import { Story, Meta } from '@storybook/react'

import StudentsStats, { StudentsStatsProps } from '.'

export default {
  title: 'student/StudentsStats',
  component: StudentsStats,
  args: {
    students: [],
    title: 'string'
  }
} as Meta

export const Default: Story<StudentsStatsProps> = (args) => (
  <StudentsStats {...args} />
)
