/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RefreshCw } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  transaction_id: z.string().min(8),
});

export function ResourcesTable({ columns, data }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [transactionID, setTransactionID] = useState("");
  const [loading, setLoading] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    // Handle form submission logic here
  }

  return (
    <div className="rounded-md border my-5 p-5 mb-20">
      <div className="flex items-center  py-4 justify-between w-full flex-col md:flex-row space-y-3">
        <Input
          placeholder="Search Table"
          value={table.getColumn("status")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("status")?.setFilterValue(event.target.value)
          }
          className="md:w-2/6 w-full"
        />
        <div className="flex items-center gap-2 flex-col md:flex-row pb-3 md:w-1/2 w-full justify-end">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center gap-2 flex-col md:flex-row w-full"
            >
              <FormField
                control={form.control}
                name="transaction_id"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Search using Transaction ID"
                        {...field}
                        className="form-input"
                        id="transaction_id"
                        onChange={(e) => {
                          field.onChange(e);
                          setTransactionID(e?.target?.value?.toUpperCase());
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button id="filterBtn" type="button" className="md:w-fit w-full">
                Search
              </Button>
              <Button onClick="" className="md:w-fit w-full" disabled={loading}>
                <RefreshCw />
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Table className="border w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="border">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan="7">
                <div className="p-5 w-full space-y-2">
                  <Skeleton className="h-2 w-full bg-[#171726] rounded-full" />
                  <Skeleton className="h-2 w-2/3 bg-[#212136] rounded-full" />
                  <Skeleton className="h-2 w-1/3 bg-[#0d0d16] rounded-full" />
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <TableBody className="border">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
      <div className="space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
