import React from "react";
import { Pagination } from "@mui/material";

interface IPagination {
  pageHandler: (page: number) => void,
  page: number,
  numberPages: number
}

export const AppPagination = (props: IPagination) => {
  const {pageHandler, page, numberPages} = props;
  
  const switchPageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    pageHandler(value)
  }

  return (
    <div>
      <Pagination variant="outlined" count={numberPages} className="pagination" onChange={switchPageHandler} page={page} />
    </div>
  )
}