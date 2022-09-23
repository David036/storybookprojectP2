import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import cn from 'classnames'

import styles from './pagination.module.scss'


export default function PaginationRounded( {size='medium',length=10,color='white',transparency='normal'} ) {
    const mainCn = cn(
        styles.pagination,
        styles[size],
        styles[color],
        styles[transparency]
    )
  return (
    <Stack className='paginationSection' spacing={2}>
      <Pagination className={mainCn} count={length} shape="rounded" />
    </Stack>
  );
}