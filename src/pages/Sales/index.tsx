import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";

export function Sales() {
  const data = [
    {
      id: "#2416",
      name: "Dry Cooler Garden",
      buyer: "Gracyn Schaeferz",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 1, // Awaiting Payment
      salesChannel: 1, // Website
      total: "$244.99 USD",
    },
    {
      id: "#2414",
      name: "Earthrise",
      buyer: "Athan Travis",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 2, // App
      total: "800.00 kr. DKK",
    },
    {
      id: "#2413",
      name: "Venice - The Giudecca",
      buyer: "veryberry@gmail.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 3, // Swap
      salesChannel: 1, // Website
      total: "1,600.00 kr. NOK",
    },
    {
      id: "#2412",
      name: "Ad Marginem",
      buyer: "meloncholy@yahoo.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 4, // Returned
      salesChannel: 1, // Website
      total: "€449.99 EUR",
    },
    {
      id: "#2411",
      name: "Burggarten",
      buyer: "Jason Schuller",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 1, // Website
      total: "€100.00 EUR",
    },
    {
      id: "#2410",
      name: "Heitere Gebirgslanschaft",
      buyer: "Lian O'neill",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 4, // Physical store POS
      total: "€99.99 EUR",
    },
    {
      id: "#2409",
      name: "In the Realm of Air",
      buyer: "nopulp@email.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 1, // Awaiting Payment
      salesChannel: 1, // Website
      total: "2,500.00 kr. DKK",
    },
    {
      id: "#2408",
      name: "Pomontorio Ph",
      buyer: "Lina Robertson",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 3, // Swap
      salesChannel: 2, // App
      total: "$200.00 USD",
    },
    {
      id: "#2407",
      name: "The Hour Before One Night",
      buyer: "Eva Calvert",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 4, // Returned
      salesChannel: 3, // Amazon
      total: "$50.00 USD",
    },
    {
      id: "#2406",
      name: "The Seafarers",
      buyer: "tothmoon@gmail.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 1, // Website
      total: "$349.99 USD",
    },
    {
      id: "#2405",
      name: "Boy in Fancy",
      buyer: "Tom Schou",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 1, // Website
      total: "€99.99 EUR",
    },
    {
      id: "#2404",
      name: "Crystal Gradation",
      buyer: "Gracyn Schaeferz",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 1, // Awaiting Payment
      salesChannel: 1, // Website
      total: "$244.99 USD",
    },
    {
      id: "#2403",
      name: "May Picture",
      buyer: "Athan Travis",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 1, // Website
      total: "800.00 kr. DKK",
    },
    {
      id: "#2402",
      name: "Persische Nachtigallen",
      buyer: "veryberry@gmail.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 3, // Swap
      salesChannel: 1, // Website
      total: "1,600.00 kr. NOK",
    },
    {
      id: "#2401",
      name: "The Firmament Above the...",
      buyer: "meloncholy@yahoo.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 4, // Returned
      salesChannel: 1, // Website
      total: "€449.99 EUR",
    },
    {
      id: "#2400",
      name: "Autumn Flower",
      buyer: "Gracyn Schaeferz",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 2, // Paid
      salesChannel: 1, // Website
      total: "€99.99 EUR",
    },
    {
      id: "#2359",
      name: "Senecio",
      buyer: "Athan Travis",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 1, // Awaiting Payment
      salesChannel: 1, // Website
      total: "2,500.00 kr. DKK",
    },
    {
      id: "#2358",
      name: "Animals in an Enclosure",
      buyer: "veryberry@gmail.com",
      email: "exemplo@exemplo.com.br",
      fulfillment: 2, // not_fulfilled
      status: 3, // Swap
      salesChannel: 1, // Website
      total: "$200.00 USD",
    },
  ];

  const statusList = [
    { id: 1, name: "Awaiting Payment" },
    { id: 2, name: "Paid" },
    { id: 3, name: "Swap" },
    { id: 4, name: "Returned" },
  ];

  const fulfillmentList = [
    { id: 1, name: "fulfilled" },
    { id: 2, name: "not fulfilled" },
  ];

  const salesChannelList = [
    { id: 1, name: "Website" },
    { id: 2, name: "App" },
    { id: 3, name: "Amazon" },
    { id: 4, name: "Physical store POS" },
  ];

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
      header: "Name",
      sortable: true,
    },
    {
      accessorKey: "buyer",
      header: "Buyer",
    },
    {
      accessorKey: "fulfillment",
      header: "Fulfillment",
      filterList: statusList,
      cell: ({ row }) => {
        const fulfillmentId = row.getValue("fulfillment");
        const fulfillmentName =
          fulfillmentList.find((status) => status.id === fulfillmentId)?.name ||
          "Unknown";
        return <div className="capitalize">{fulfillmentName}</div>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      filterList: statusList,
      cell: ({ row }) => {
        const statusId = row.getValue("status");
        const statusName =
          statusList.find((status) => status.id === statusId)?.name ||
          "Unknown";
        return <div className="capitalize">{statusName}</div>;
      },
    },
    {
      accessorKey: "salesChannel",
      header: "Sales Channel",
      filterList: salesChannelList,
      cell: ({ row }) => {
        const channelId = row.getValue("salesChannel");
        const channelName =
          salesChannelList.find((channel) => channel.id === channelId)?.name ||
          "Unknown";
        return <div className="capitalize">{channelName}</div>;
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    // {
    //   id: "actions",
    //   enableHiding: false,
    //   cell: ({ row }) => {
    //     const payment = row.original;

    //     return (
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="ghost" className="h-8 w-8 p-0">
    //             <span className="sr-only">Open menu</span>
    //             <MoreHorizontal className="h-4 w-4" />
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //           <DropdownMenuItem
    //             onClick={() => navigator.clipboard.writeText(payment.id)}
    //           >
    //             Copy payment ID
    //           </DropdownMenuItem>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>View customer</DropdownMenuItem>
    //           <DropdownMenuItem>View payment details</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     );
    //   },
    // },
  ];

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
