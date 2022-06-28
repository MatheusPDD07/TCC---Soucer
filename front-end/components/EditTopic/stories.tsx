import { Story, Meta } from '@storybook/react'

import EditTopic, { EditTopicProps } from '.'

export default {
  title: 'EditTopic',
  component: EditTopic,
  args: {
    id: 'string',
    title: 'string',
    description: 'string',
    fatherId: 'string',
    topics: []
  }
} as Meta

export const Default: Story<EditTopicProps> = (args) => <EditTopic {...args} />
