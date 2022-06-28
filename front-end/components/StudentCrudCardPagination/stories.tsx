import { Story, Meta } from '@storybook/react'

import StudentCrudCardPagination, { StudentCrudCardPaginationProps } from '.'

import mock from './mock'

export default {
  title: 'StudentCrudCardPagination',
  component: StudentCrudCardPagination,
  args: { items: mock }
} as Meta

export const Default: Story<StudentCrudCardPaginationProps> = (args) => (
  <StudentCrudCardPagination {...args} />
)
