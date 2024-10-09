"use client";
import { FilterProps } from "@/types/props";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { filterToParams } from "@/utils/filterToParams";
import { useRouter } from "next/navigation";

const Filter = (props: FilterProps) => {
  const [filterValue, setFilterValue] = useState<{
    [key: string]: string;
  }>({});

  const handleValueChange = (key: string) => (value: string) => {
    setFilterValue({ ...filterValue, [key]: value });
  };

  const handleReset = (key: string) => () => {
    setFilterValue({ ...filterValue, [key]: "" });
  };

  const router = useRouter();

  useEffect(() => {
    const filterParams = filterToParams(filterValue);
    router.push("/" + filterParams);
  }, [filterValue]);

  return (
    <div className="mx-auto flex  gap-x-4 w-max my-4">
      {props.filters.map((filter) => (
        <div
          key={filter.label}
          className="flex flex-row p-1 border rounded-md items-center"
        >
          {filterValue[filter.label] && (
            <Button
              onClick={handleReset(filter.label)}
              variant="ghost"
              size="sm"
            >
              <X size={12} />
            </Button>
          )}
          <Select
            value={filterValue[filter.label] || ""}
            onValueChange={handleValueChange(filter.label)}
          >
            <SelectTrigger className="border-none hover:bg-neutral-50 dark:hover:bg-neutral-900">
              <SelectValue placeholder={filter.label} />
            </SelectTrigger>
            <SelectContent>
              {filter.values.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
};

export default Filter;
