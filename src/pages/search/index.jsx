// eslint-disable-next-line
import React from "react";
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { Loader } from 'components/loader'
import { Paginator } from 'components/paginator'
import { SearchResult } from 'components/search-result'
import { useParams } from 'react-router-dom'
import { useSearchData, usePagination } from 'hooks'

const Results = ({ result, search }) => {
  return (
    result === 'error'
      ? <div className={styles.error}>
        <p>Nothing is found for {search}</p>
      </div>
      : <>
        <p>Results for {search}</p>
        <div className={styles.resultsWrapper}>
          {
            result.map(res => {
              return <SearchResult result={res} key={res.date} />
            })
          }
        </div>
      </>
  )
}


export const Search = () => {
  const { search } = useParams()
  const { setNextPage,
    setPrevPage,
    page,
    nextDisabled,
    prevDisabled } = usePagination()
  const { isLoaded, result } = useSearchData(search, page)

  return (
    <div className="page">
      {isLoaded ? <>
        <Results result={result} search={search} />
        {result === 'error' ? <></> : <Paginator setPrevPage={setPrevPage} setNextPage={setNextPage} prevDisabled={prevDisabled} nextDisabled={nextDisabled} />}
        <Link className={styles.back} to='/'>
          <span role="img" aria-label="calendar" >📅</span>Back to Calendar
        </Link>
      </>
        : <Loader />}
    </div>
  )
}
