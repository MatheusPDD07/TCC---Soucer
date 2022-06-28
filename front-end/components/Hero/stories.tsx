import { Story, Meta } from '@storybook/react'

import Hero, { HeroProps } from '.'

export default {
  title: 'Hero',
  component: Hero,
  args: {
    name: 'user',
    countVideos: 1,
    countDocuments: 2,
    countStudents: 3
  }
} as Meta

export const Default: Story<HeroProps> = (args) => <Hero {...args} />
