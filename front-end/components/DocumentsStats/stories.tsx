import { Story, Meta } from '@storybook/react'

import DocumentsStats, { DocumentsStatsProps } from '.'

import mock from './mock'

export default {
  title: 'document/DocumentsStats',
  component: DocumentsStats,
  args: { documents: mock }
} as Meta

export const Default: Story<DocumentsStatsProps> = (args) => (
  <div style={{ maxWidth: 350 }}>
    <DocumentsStats {...args} />
  </div>
)
