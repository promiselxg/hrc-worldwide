import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, Edit2, MoreHorizontal } from "lucide-react";
import { FiTrash2 } from "react-icons/fi";

export const columns = [
  {
    accessorKey: "event_title",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Event title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const { event_title } = row.original;
      return (
        <>
          <div>
            <h1 className={cn(`font-bold capitalize`)}>{event_title}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "minister",
    header: "Ministers",
    cell: ({ row }) => {
      const { minister } = row.original;
      return (
        <>
          <div>
            <h1 className={cn(`font-bold uppercase`)}>{minister}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "event_bg",
    header: "Event Banner",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "event_date",
    header: "Event Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu className="bg-[green] flex w-full">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[white] w-fit shadow-md py-5 px-2 rounded-sm flex flex-col"
          >
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:outline-none">
              <Button variant="ghost" className="w-full flex justify-start">
                <Edit2 size={16} /> Edit Event
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {}}
              className="text-red-400 flex items-center gap-2 cursor-pointer hover:outline-none"
            >
              <Button variant="ghost" className="w-full flex justify-start">
                <FiTrash2 /> Delete Event
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
