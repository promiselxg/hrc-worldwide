import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, Edit2, MoreHorizontal } from "lucide-react";
import { FiTrash2 } from "react-icons/fi";

export const columns = [
  {
    accessorKey: "sn",
    header: "S/N",
  },
  {
    accessorKey: "resource_title",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Resource title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const { resource_title } = row.original;
      return (
        <>
          <div>
            <h1 className={cn(`font-bold capitalize`)}>{resource_title}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "resource_type",
    header: "Resource Type",
    cell: ({ row }) => {
      const { resource_type } = row.original;
      let type = "";
      if (resource_type === "video") type = "Video";
      if (resource_type === "image") type = "Image";
      return (
        <>
          <div>
            <h1 className={cn(`font-bold uppercase`)}>{type}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "thumbnail",
    header: "Resource Thumbnail",
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
            <DropdownMenuLabel className="flex justify-center">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:outline-none">
              <Button variant="ghost" className="w-full flex justify-start">
                <Edit2 size={16} /> Edit
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {}}
              className="text-red-400 flex items-center gap-2 cursor-pointer hover:outline-none"
            >
              <Button variant="ghost" className="w-full flex justify-start">
                <FiTrash2 /> Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
