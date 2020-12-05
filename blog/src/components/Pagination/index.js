import React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"

import * as S from "./styled"

function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>&larr; Anterior </Link>}

      <p>
        {currentPage} de {numPages}
      </p>

      {!isLast && <Link to={nextPage}>Próxima &rarr;</Link>}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPage: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination
