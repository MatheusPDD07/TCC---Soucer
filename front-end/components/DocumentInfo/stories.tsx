import { Story, Meta } from '@storybook/react'

import DocumentInfo, { DocumentInfoProps } from '.'

export default {
  title: 'DocumentInfo',
  component: DocumentInfo,
  args: {
    id: '71f0e72a-67a6-4b4d-8f5a-1acb58ea58c4',
    title: 'UML 51 Exercicios - Ana Cristina Melo',
    stars: 1,
    keys: 'UML; engenharia de software; uml;',
    views: 24,
    isFavorite: false
  }
} as Meta

export const Default: Story<DocumentInfoProps> = (args) => (
  <DocumentInfo {...args} />
)
