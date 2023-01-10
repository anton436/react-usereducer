import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { postContext } from '../../contexts/PostContextProvider';

export default function PaginationControlled() {
  const { page, setPage, totalPages } = React.useContext(postContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  );
}
