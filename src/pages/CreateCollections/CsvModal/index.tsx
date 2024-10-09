import { DataTable } from "@/components/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CsvModalProps {
  open?: boolean;
  data: string[][];
}

export function CsvModal({ open, data }: CsvModalProps) {
  const tableData = data.map(([id, name, image]) => ({ id, name, image }));

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Title",
      cell: ({ row }) => (
        <div className="flex gap-3 items-center">
          <div>
            <img src={row.original.image} alt="" width="30px" height="40px" />
          </div>
          <div>{row.getValue("name")}</div>
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: "Id",
    },
  ];

  const filterList = [
    {
      label: "Status",
      options: [{ label: "Active" }, { label: "Inactive" }],
    },
    {
      label: "Payment Status",
      options: [{ label: "Paid" }, { label: "Unpaid" }, { label: "Pending" }],
    },
    {
      label: "Fulfillment Status",
      options: [
        { label: "Fulfilled" },
        { label: "Unfulfilled" },
        { label: "Partially Fulfilled" },
      ],
    },
    {
      label: "Date",
      options: [
        { label: "Today" },
        { label: "This Week" },
        { label: "This Month" },
      ],
    },
    {
      label: "Sales Channels",
      options: [
        { label: "App" },
        { label: "Amazon" },
        { label: "Physical store POS" },
        { label: "Website" },
        { label: "Facebook" },
        { label: "Instagram" },
      ],
    },
  ];

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import CSV</DialogTitle>
          <div>
            <DataTable data={tableData} columns={columns} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
