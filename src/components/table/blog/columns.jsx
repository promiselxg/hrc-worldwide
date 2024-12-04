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
    accessorKey: "blog_title",
    header: ({ column }) => {
      return (
        <span
          className="cursor-pointer flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Blog title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const { blog_title } = row.original;
      return (
        <>
          <div>
            <h1 className={cn(`font-bold capitalize`)}>{blog_title}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "blog_content",
    header: "Blog Content",
    cell: ({ row }) => {
      const { blog_content } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm font-lato`)}>{blog_content}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "blog_banner",
    header: "Display Image",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "published_date",
    header: "Published Date",
  },
  {
    accessorKey: "author",
    header: "Published By",
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
              <Link
                to={`/admin/blog/${id}/edit`}
                className="w-full flex justify-start"
              >
                <Button variant="ghost" className="w-full flex justify-start">
                  <Edit2 size={16} /> Edit Post
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                handleDeleteBtn(id, "");
              }}
              className="text-red-400 flex items-center gap-2 cursor-pointer hover:outline-none"
            >
              <Button variant="ghost" className="w-full flex justify-start">
                <FiTrash2 /> Delete Post
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
