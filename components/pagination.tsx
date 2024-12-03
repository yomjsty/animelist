import React from 'react'

const Pagination = ({ page, setPage, lastPage }: { page: number, setPage: (page: number) => void, lastPage: number }) => {
    const scrollToTop = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleNextPage = () => {
        setPage(page + 1)
        scrollToTop()
    }
    const handlePrevPage = () => {
        setPage(page - 1)
        scrollToTop()
    }

    return (
        <div className="flex items-center justify-center gap-4">
            {page > 1 && (
                <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
            )}
            <p className="inline-flex items-center gap-2">
                <span>
                    {page}
                </span>
                of
                <span>
                    {lastPage}
                </span>
            </p>
            {page < lastPage && (
                <button onClick={handleNextPage} disabled={page === lastPage}>Next</button>
            )}
        </div>
    )
}

export default Pagination