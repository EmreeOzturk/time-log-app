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
import { useLogStore } from '@/store'
const LogTable = () => {
    const logs = useLogStore(state => state.logs)
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
                    {
                        Object.keys(logs).map((key) => {
                            const log = logs[key]
                            return (
                                <TableRow key={key}>
                                    <TableCell>{log.date.toDateString()}</TableCell>
                                    <TableCell>{log?.hour}</TableCell>
                                    <TableCell>{log?.note}</TableCell>
                                </TableRow>
                            )
                        }
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default LogTable