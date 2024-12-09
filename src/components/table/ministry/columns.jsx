import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleDeleteBtn } from "@/utils/deleteItemFromDb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, Edit2, MoreHorizontal } from "lucide-react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export const columns = [
  {
    accessorKey: "ministry_category",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Minsitry Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const { ministry_category } = row.original;
      return (
        <>
          <div>
            <h1 className={cn(`font-bold capitalize`)}>{ministry_category}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "ministry_description",
    header: "Ministry Description",
    cell: ({ row }) => {
      const { ministry_description } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm font-lato`)}>{ministry_description}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "ministry_image_url",
    header: "Thumbnail",
    cell: ({ row }) => {
      const { ministry_image_url, id, ministry_category } = row.original;
      return (
        <>
          <div>
            <img
              src={ministry_image_url}
              alt={`Banner-${ministry_category}-${id}`}
              className="w-[100px] h-[80px] object-contain"
            />
          </div>
        </>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu className="flex w-full">
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
              <Link
                to={`/admin/ministry/${id}/edit`}
                className="w-full flex justify-start"
              >
                <Button variant="ghost" className="w-full flex justify-start">
                  <Edit2 size={16} /> Edit Ministry
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {}}
              className="text-red-400 flex items-center gap-2 cursor-pointer hover:outline-none"
            >
              <Button
                variant="ghost"
                className="w-full flex justify-start"
                onClick={() => handleDeleteBtn(id, "ministry", "ministry")}
              >
                <FiTrash2 /> Delete Ministry
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
