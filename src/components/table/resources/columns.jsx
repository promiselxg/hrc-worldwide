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
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export const columns = [
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
    accessorKey: "resource_file_type",
    header: "Resource Type",
    cell: ({ row }) => {
      const { resource_file_type } = row.original;
      let type = "";
      if (resource_file_type === "video") type = "Video";
      if (resource_file_type === "audio") type = "audio";
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
    accessorKey: "resource_file_url",
    header: "Resource Thumbnail",
    cell: ({ row }) => {
      const { resource_file_url } = row.original;
      return (
        <>
          <div>
            <ReactPlayer
              url={resource_file_url}
              width="100%"
              height={100}
              volume={1}
              controls={true}
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
                to={`/admin/resource/${id}/edit`}
                className="w-full flex justify-start"
              >
                <Button variant="ghost" className="w-full flex justify-start">
                  <Edit2 size={16} /> Edit Resource
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
                onClick={() => handleDeleteBtn(id, "resource", "resource")}
              >
                <FiTrash2 /> Delete Resource
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
