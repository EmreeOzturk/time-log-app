"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const LogTable = () => {
    return (
        <div className='border border-dashed border-slate-600 my-6 rounded-lg p-4'>
            <Table >
                <TableCaption>A list of all logs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Date</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>Note</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default LogTable