import { Story, Meta } from '@storybook/react'

import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  title: 'Cursos',
  subtitle: 'Lista dos melhores curso para você'
}
