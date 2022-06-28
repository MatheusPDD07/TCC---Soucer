import { Story, Meta } from '@storybook/react'

import TopicCrudCard, { TopicCrudCardProps } from '.'

export default {
  title: 'TopicCrudCard',
  component: TopicCrudCard,
  args: {
    id: 'b12863de-0b05-4be1-94a4-2d0b1a1d7ff9',
    title: 'Infraestrutura',
    description: 'Estude sobre AWS, Docker, Azure, etc...',
    sons: 5
  }
} as Meta

export const Default: Story<TopicCrudCardProps> = (args) => (
  <div style={{ maxWidth: 320 }}>
    <TopicCrudCard {...args} />
  </div>
)
