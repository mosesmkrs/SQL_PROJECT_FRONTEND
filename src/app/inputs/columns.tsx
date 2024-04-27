"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  InputType: string
  AssignedFarmer: number
  Quantity: number
  DateProvided: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "InputsID",
  },
  {
    accessorKey: "InputType",
    header: "InputType",
  },
  {
    accessorKey: "AssignedFarmer",
    header: "AssignedFarmer",
  },
  {
    accessorKey: "Quantity",
    header: "Quantity(kgs)",
  },
  {
    accessorKey: "DateProvided",
    header: "DateProvided",
  },
]
