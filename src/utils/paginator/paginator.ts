/* eslint-disable */
export const paginator = (
  currentPage: number,
  totalCount: number,
  pageSize: number,
): number[] => {
  const pagesCounter = Math.ceil(totalCount / pageSize);
  const pages = [];

  if (currentPage < 7) {
    for (let i = 1; i <= currentPage + 5; i++) {
      pages.push(i);
    }
    pages.push(pagesCounter);
  } else if (currentPage + 5 >= pagesCounter) {
    pages.push(1);
    for (let i = currentPage - 5; i <= pagesCounter; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    for (let i = currentPage - 5; i <= currentPage + 5; i++) {
      pages.push(i);
    }
    pages.push(pagesCounter);
  }

  //
  // const pagesCounter = Math.ceil(totalCount / pageSize);
  // const maxPage = 7;
  // const pages = [];
  // const numberOfPages = 5;
  // const onePage = 1;
  //
  // if (currentPage < maxPage) {
  //   for (let i = 1; i <= currentPage + numberOfPages; i + onePage) {
  //     pages.push(i);
  //   }
  //   pages.push(pagesCounter);
  // } else if (currentPage + numberOfPages >= pagesCounter) {
  //   pages.push(onePage);
  //   for (let i = currentPage - numberOfPages; i <= pagesCounter; i + onePage) {
  //     pages.push(i);
  //   }
  // } else {
  //   pages.push(onePage);
  //   for (
  //     let i = currentPage - numberOfPages;
  //     i <= currentPage + numberOfPages;
  //     i + onePage
  //   ) {
  //     pages.push(i);
  //   }
  //   pages.push(pagesCounter);
  // }
  return pages;
};
