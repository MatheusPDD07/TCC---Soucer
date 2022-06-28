import { useState } from 'react'
import { Pagination } from 'react-pagination-bar'

import StudentCrudCard, {
  StudentCrudCardProps
} from 'components/StudentCrudCard'
import Empty from 'components/Empty'

import * as S from './styles'

export type StudentCrudCardPaginationProps = {
  items: StudentCrudCardProps[]
  pageButton?: React.ReactNode
}

const StudentCrudCardPagination = ({
  items,
  pageButton
}: StudentCrudCardPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 12 as number

  return (
    <S.Wrapper>
      <S.ItemsArea>
        {items.length > 0 ? (
          items
            .slice(
              (currentPage - 1) * pagePostsLimit,
              (currentPage - 1) * pagePostsLimit + pagePostsLimit
            )
            .map((item) => <StudentCrudCard key={item.id} {...item} />)
        ) : (
          <Empty
            title="Não há Estudante"
            description="Não foram adicionados estudantes até o momento"
            pageButton={pageButton}
          />
        )}
      </S.ItemsArea>
      <Pagination
        initialPage={currentPage}
        itemsPerPage={pagePostsLimit}
        onPageСhange={(pageNumber: number) => setCurrentPage(pageNumber)}
        totalItems={items.length}
        pageNeighbours={2}
        startLabel={'<<'}
        endLabel={'>>'}
        nextLabel={'>'}
        prevLabel={'<'}
        customClassNames={{
          rpbItemClassName: 'custom-item',
          rpbItemClassNameActive: 'custom-item--active',
          rpbGoItemClassName: 'custom-go-item',
          rpbItemClassNameDisable: 'custom-item--disable',
          rpbProgressClassName: 'custom-progress-bar',
          rpbRootClassName: 'custom-root'
        }}
      />
    </S.Wrapper>
  )
}

export default StudentCrudCardPagination
