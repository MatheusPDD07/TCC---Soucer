import { NextSeo } from 'next-seo'

import NotFound from 'templates/NotFound'

import Empty from 'components/Empty'

import { SITE_NAME } from './_app'

export default function Index() {
  return (
    <NotFound>
      <NextSeo title={`Página Não Encontrada - ${SITE_NAME}`} />
      <Empty
        title="Página Não Encontrada"
        description="Esta página não existe. Volte para a página inicial para acessar a área interna."
        hasLink
      />
    </NotFound>
  )
}
