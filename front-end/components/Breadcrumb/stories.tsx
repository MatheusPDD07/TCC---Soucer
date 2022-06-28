import { Story, Meta } from '@storybook/react'

import Breadcrumb, { BreadcrumbProps } from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as Meta

export const WithoutSupCategoria: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)

WithoutSupCategoria.args = {
  title: 'Categorias'
}

export const WithSupCategoria: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)

WithSupCategoria.args = {
  title: 'Categorias',
  supTitle: 'Categoria',
  supUrl: '/admin/categoria'
}
