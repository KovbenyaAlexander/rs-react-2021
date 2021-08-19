const getPageNumbers = (totalPages, max, currentPage) => {
  const half = Math.round(max / 2);
  let to = max;

  if (currentPage + half >= totalPages) {
    to = totalPages;
  } else if (currentPage > half) {
    to = currentPage + half;
  }

  const from = to - max;
  console.log(`total ${totalPages}`);
  console.log(`max ${max}`);
  console.log(`currentPage ${currentPage}`);

  console.log(Array.from({ length: max }, (_, i) => i + 1 + from));

  return Array.from({ length: max }, (_, i) => i + 1 + from);
};

export default getPageNumbers;
