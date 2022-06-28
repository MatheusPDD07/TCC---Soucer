import { Story, Meta } from '@storybook/react'

import { TopicsSelectData } from '.'

import FormAddTopic from '.'

const props = [
  { id: '345', title: 'Back' },
  { id: '456', title: 'Front' }
]

export default {
  title: 'Form/FormAddTopic',
  component: FormAddTopic
} as Meta

export const Default: Story<TopicsSelectData> = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormAddTopic topicsSelect={props} />
  </div>
)
