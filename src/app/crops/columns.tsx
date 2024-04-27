"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  CropName: string
  PricePerKg: number
  PricePer50KgBag: string

}
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Index",
  },
  {
    accessorKey: "CropName",
    header: "Crop name",
  },
  {
    accessorKey: "PricePerKg",
    header: "PricePerKg",
  },
  {
    accessorKey: "PricePer50KgBag",
    header: "PricePer50KgBag",
  },
]
