import { Story, Meta } from '@storybook/react'

import Topic, { TopicProps } from '.'

import { FiDollarSign } from 'react-icons/fi'

export default {
  title: 'Topic',
  component: Topic,
  args: {
    icon: <FiDollarSign size={30} />,
    title: 'Finanças'
  },
  parameters: {
    backgrounds: {
      default: 'tertiary'
    }
  }
} as Meta

export const Default: Story<TopicProps> = (args) => <Topic {...args} />
