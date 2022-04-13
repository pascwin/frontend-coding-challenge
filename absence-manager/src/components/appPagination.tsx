import React from "react";
import { Pagination } from "@mui/material";

interface IPagination {
  pageHandler: (page: number) => void,
  page: number,
  numberPages: number
}

export const AppPagination = (props: IPagination) => {
  const switchPageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    props.pageHandler(value)
  }

  return (
    <div>
      <Pagination variant="outlined" count={props.numberPages} className="pagination" onChange={switchPageHandler} page={props.page} />
    </div>
  )
}