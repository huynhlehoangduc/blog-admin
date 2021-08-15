export interface PaginationResponse<T> {
  data: T[];
  meta: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
  };
}
