"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  FirstName: string
  LastName: string
  HouseholdSize: number
  Contact: number
  County: string
  FarmSize: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Index",
  },
  {
    accessorKey: "FirstName",
    header: "First name",
  },
  {
    accessorKey: "LastName",
    header: "Last name",
  },
  {
    accessorKey: "HouseholdSize",
    header: "HouseholdSize",
  },
  {
    accessorKey: "Contact",
    header: "Contact",
  },
  {
    accessorKey: "County",
    header: "County",
  },
  {
    accessorKey: "FarmSize",
    header: "FarmSize",
  },
]
