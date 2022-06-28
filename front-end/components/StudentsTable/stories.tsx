import { Story, Meta } from '@storybook/react'
import StudantsTable from '.'

export default {
  title: 'StudantsTable',
  component: StudantsTable
} as Meta

export const Default: Story = () => <StudantsTable />
