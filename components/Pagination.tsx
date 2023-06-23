import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { page } from '@/redux/selectors';
import { setPage } from '@/redux/slices/newsSlice';

import { NextIcon, PrevIcon } from './icons';

export const Pagination = () => {
  const curPage = useAppSelector(page);
  const dispatch = useAppDispatch();

  const handlePrevPage = useCallback(
    (page: number) => {
      dispatch(setPage(page - 1));
    },
    [dispatch]
  );

  const handleNextPage = useCallback(
    (page: number) => {
      dispatch(setPage(page + 1));
    },
    [dispatch]
  );

  return (
    <div className="pagination_container">
      <button onClick={() => handlePrevPage(curPage)} disabled={curPage === 1}>
        <PrevIcon />
      </button>
      <h3>{curPage}</h3>
      <button onClick={() => handleNextPage(curPage)}>
        <NextIcon />
      </button>
    </div>
  );
};
