import { PaginationNumber } from "./styles";

interface PaginationComponentProps {
  currentPage: number;
  reposPerPage: number;
  totalRepos: number;
  goToPage: (pageNumber: number) => void;
}

export function PaginationComponent(props: PaginationComponentProps) {
  const { currentPage, reposPerPage, totalRepos, goToPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers.length > 1 &&
        pageNumbers.map((pageNumber: number) => (
          <PaginationNumber
            onClick={() => goToPage(pageNumber)}
            disabled={currentPage === pageNumber}
            key={pageNumber}
          >
            {pageNumber}
          </PaginationNumber>
        ))}
    </nav>
  );
}
