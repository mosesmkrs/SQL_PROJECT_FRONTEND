"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  AbilityToFeedNation: string
  ProductivityScore: string

}
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "FarmerID",
  },
  {
    accessorKey: "AbilityToFeedNation",
    header: "AbilityToFeedNation",
  },
  {
    accessorKey: "ProductivityScore",
    header: "ProductivityScore",
  },
]
