import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { page } from '@/redux/selectors';
import { setPage } from '@/redux/slices/newsSlice';

import { NextIcon, PrevIcon } from './icons';

export const Pagination = () => {
  const curPage = useAppSelector(page);
  const dispatch = useAppDispatch();

  return (
    <div className="pagination_container">
      <button onClick={() => dispatch(setPage(curPage - 1))} disabled={curPage === 1}>
        <PrevIcon />
      </button>
      <h3>{curPage}</h3>
      <button onClick={() => dispatch(setPage(curPage + 1))}>
        <NextIcon />
      </button>
    </div>
  );
};
