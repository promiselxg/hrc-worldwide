import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleDeleteBtn } from "@/utils/deleteItemFromDb";
import { formatDateWithoutTime } from "@/utils/getDateDifference";
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
    accessorKey: "event_minister",
    header: "Ministers",
    cell: ({ row }) => {
      const { event_minister } = row.original;
      return (
        <>
          <div>
            <h1 className={cn(`font-bold uppercase`)}>{event_minister}</h1>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "event_image_url",
    header: "Event Banner",
    cell: ({ row }) => {
      const { event_image_url, event_title } = row.original;
      return (
        <>
          <div>
            <img
              src={event_image_url}
              alt={event_title}
              className="w-[100px] h-[80px] object-contain"
            />
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "event_tag",
    header: "Tags",
    cell: ({ row }) => {
      const { event_tag } = row.original;
      return (
        <>
          <div>{event_tag}</div>
        </>
      );
    },
  },
  {
    accessorKey: "event_date",
    header: "Event Date",
    cell: ({ row }) => {
      const { event_date } = row.original;
      return (
        <>
          <div>{formatDateWithoutTime(event_date)}</div>
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
                to={`/admin/event/${id}/edit`}
                className="w-full flex justify-start"
              >
                <Button variant="ghost" className="w-full flex justify-start">
                  <Edit2 size={16} /> Edit Event
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
                onClick={() => handleDeleteBtn(id, "event", "event")}
              >
                <FiTrash2 /> Delete Event
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
