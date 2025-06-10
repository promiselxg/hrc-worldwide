import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { handleDeleteBtn } from "@/utils/deleteItemFromDb";
import host from "@/utils/host";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export function LivestreamTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStreamUrl = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${host.url}/livestream`);
        setData(response?.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch YouTube stream:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStreamUrl();
  }, []);

  return (
    <Table>
      <TableCaption>&nbsp;</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Platform</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      {loading ? (
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>
              <Skeleton className="w-full h-6 animate-pulse bg-gray-400" />
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {data?.map((stream) => (
            <TableRow key={stream.id}>
              <TableCell className="font-medium">{stream.platform}</TableCell>
              <TableCell className="truncate max-w-[400px]">
                {stream.url}
              </TableCell>
              <TableCell className="text-right">
                <Trash2
                  className="w-5 h-5 cursor-pointer hover:text-red-600"
                  onClick={() =>
                    handleDeleteBtn(stream.id, "livestream", "livestream")
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
}
