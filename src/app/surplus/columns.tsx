"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  FarmerID: number
  CropID: number
  QuantityInBags: number
  DateSold: string
  PricePerBag: number
  TotalPrice: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "InputsID",
  },
  {
    accessorKey: "FarmerID",
    header: "FarmerID",
  },
  {
    accessorKey: "CropID",
    header: "CropID",
  },
  {
    accessorKey: "QuantityInBags",
    header: "QuantityInBags",
  },
  {
    accessorKey: "DateSold",
    header: "DateSold",
  },
  {
    accessorKey: "PricePerBag",
    header: "PricePerBag",
  },
  {
    accessorKey: "TotalPrice",
    header: "TotalPrice",
  },
]
