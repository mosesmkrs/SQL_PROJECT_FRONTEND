"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  FarmerID: number
  DateGiven: string
  Amount: number
  Purpose: string
  RepaymentStatus: string
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
    accessorKey: "DateGiven",
    header: "DateGiven",
  },
  {
    accessorKey: "Amount",
    header: "Amount",
  },
  {
    accessorKey: "Purpose",
    header: "Purpose",
  },
  {
    accessorKey: "RepaymentStatus",
    header: "RepaymentStatus",
  },
]
