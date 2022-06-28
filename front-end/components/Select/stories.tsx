import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '.'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    label: 'Super Categoria',
    name: 'fatherId',
    initialValue: 'Selecione uma super categoria',
    disabled: false,
    items: [
      { id: '123', title: 'Backend' },
      { id: '234', title: 'Frontend' }
    ]
  }
} as ComponentMeta<typeof Select>

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
)

export const WithError: ComponentStory<typeof Select> = (args) => (
  <Select {...args} error="Ops...something is wrong" />
)
