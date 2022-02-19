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
  return pages;
};

//   const pagesCounter = Math.ceil(totalCount / pageSize);
//   const pages = [];
//
//   const firstPage = 1;
//   const fivePages = 5;
//   const oneNumber = 1;
//   const sevenFirsPages = 7;
//   const previousPages = currentPage - fivePages;
//   const nextPages = currentPage + fivePages;
//
//   if (currentPage < sevenFirsPages) {
//     for (let i = 1; i <= nextPages; i + oneNumber) {
//       pages.push(i);
//     }
//     pages.push(pagesCounter);
//   } else if (nextPages >= pagesCounter) {
//     pages.push(firstPage);
//     for (let i = previousPages; i <= pagesCounter; i + oneNumber) {
//       pages.push(i);
//     }
//   } else {
//     pages.push(firstPage);
//     for (let i = previousPages; i <= nextPages; i + oneNumber) {
//       pages.push(i);
//     }
//     pages.push(pagesCounter);
//   }
