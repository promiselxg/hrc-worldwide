import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleDeleteBtn } from "@/utils/deleteItemFromDb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Edit2, MoreHorizontal } from "lucide-react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export const columns = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const { description } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{description}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Resource Thumbnail",
    cell: ({ row }) => {
      const { imageUrl, id } = row.original;
      return (
        <>
          <div>
            <img
              src={imageUrl}
              alt={`Banner-${id}`}
              className="w-[100px] h-[80px] object-contain"
            />
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "banner_position",
    header: "Banner Position",
    cell: ({ row }) => {
      const { banner_position } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{banner_position}</p>
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
                to={`/admin/banner/${id}/edit`}
                className="w-full flex justify-start"
              >
                <Button variant="ghost" className="w-full flex justify-start">
                  <Edit2 size={16} /> Edit Banner
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
                onClick={() => handleDeleteBtn(id, "banner", "banner")}
              >
                <FiTrash2 /> Delete Banner
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
