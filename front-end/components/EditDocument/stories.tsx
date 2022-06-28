import { Story, Meta } from '@storybook/react'

import EditDocument, { EditDocumentProps } from '.'

export default {
  title: 'EditDocument',
  component: EditDocument,
  args: {
    topics: [],
    id: 'string',
    title: 'string',
    urlDocument: 'string',
    topicId: 'string',
    keys: 'string'
  }
} as Meta

export const Default: Story<EditDocumentProps> = (args) => (
  <EditDocument {...args} />
)
