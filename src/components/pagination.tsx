"use client";
import React from "react";
import * as ShadCNPagination from "@/components/ui/pagination";
import { PaginationProps } from "@/types/props";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = (props: PaginationProps) => {
  const path = usePathname();

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? 1;

  const handleHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return path + "?" + params.toString();
  };

  const previous = () => {
    return handleHref(Math.max(+currentPage - 1, 1));
  };
  const next = () => {
    return handleHref(Math.min(+currentPage + 1, props.pageCount));
  };

  return (
    <ShadCNPagination.Pagination>
      <ShadCNPagination.PaginationContent>
        <ShadCNPagination.PaginationItem>
          <ShadCNPagination.PaginationPrevious
            data-disabled={+currentPage === 1}
            className="data-[disabled=true]:opacity-20 data-[disabled=true]:pointer-events-none"
            href={previous()}
          />
        </ShadCNPagination.PaginationItem>
        <ShadCNPagination.PaginationItem key={"page-1"}>
          <ShadCNPagination.PaginationLink
            href={handleHref(1)}
            isActive={currentPage == 1}
          >
            {1}
          </ShadCNPagination.PaginationLink>
        </ShadCNPagination.PaginationItem>
        {+currentPage > 3 && (
          <ShadCNPagination.PaginationItem>
            <ShadCNPagination.PaginationEllipsis />
          </ShadCNPagination.PaginationItem>
        )}
        {Array.from(Array(props.pageCount))
          .map((_, i) => i + 1)
          .splice(Math.max(props.currentPage - 2, 1), 4)
          .filter((page) => page !== 1 && page !== props.pageCount)
          .map((page) => (
            <ShadCNPagination.PaginationItem key={page}>
              <ShadCNPagination.PaginationLink
                href={handleHref(page)}
                isActive={currentPage == page}
              >
                {page}
              </ShadCNPagination.PaginationLink>
            </ShadCNPagination.PaginationItem>
          ))}
        {props.pageCount - +currentPage > 3 && (
          <ShadCNPagination.PaginationItem>
            <ShadCNPagination.PaginationEllipsis />
          </ShadCNPagination.PaginationItem>
        )}
        {props.pageCount !== 1 && (
          <ShadCNPagination.PaginationItem key={"page-last"}>
            <ShadCNPagination.PaginationLink
              href={handleHref(props.pageCount)}
              isActive={currentPage == props.pageCount}
            >
              {props.pageCount}
            </ShadCNPagination.PaginationLink>
          </ShadCNPagination.PaginationItem>
        )}
        <ShadCNPagination.PaginationItem>
          <ShadCNPagination.PaginationNext
            data-disabled={+currentPage === props.pageCount}
            className="data-[disabled=true]:opacity-20 data-[disabled=true]:pointer-events-none"
            href={next()}
          />
        </ShadCNPagination.PaginationItem>
      </ShadCNPagination.PaginationContent>
    </ShadCNPagination.Pagination>
  );
};

export default Pagination;
