export interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
}

export interface FilterProps {
  filters: { label: string; values: string[] }[];
}
