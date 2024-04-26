"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  EquipmentName: string
  ConditionGiven: string
  ConditionReturned: string
  FarmerAssigned: number
  DateAssigned: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Index",
  },
  {
    accessorKey: "EquipmentName",
    header: "Equipment name",
  },
  {
    accessorKey: "ConditionGiven",
    header: "Condition given",
  },
  {
    accessorKey: "ConditionReturned",
    header: "Condition returned",
  },
  {
    accessorKey: "FarmerAssigned",
    header: "Farmer assigned",
  },
  {
    accessorKey: "DateAssigned",
    header: "Date assigned",
  },
]
