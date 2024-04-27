"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  FarmerID: number
  CropID: number
  QuantityProduced: number
  QuantityConsumed: number
  QuantityDonated: number
  QuantityStored: number
  SurplusProduce: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "FarmerCropID",
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
    accessorKey: "QuantityProduced",
    header: "QuantityProduced(Bags)",
  },
  {
    accessorKey: "QuantityConsumed",
    header: "QuantityConsumed",
  },
  {
    accessorKey: "QuantityDonated",
    header: "QuantityDonated",
  },
  {
    accessorKey: "QuantityStored",
    header: "QuantityStored",
  },
  {
    accessorKey: "SurplusProduce",
    header: "SurplusProduce",
  },
]
