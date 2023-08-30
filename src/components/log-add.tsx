"use client"
import { GrAdd } from 'react-icons/gr'
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import DatePicker from './date-picker'
const LogAdd = () => {
    return (
        <div className='w-full flex justify-center my-12'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='w-1/4 border border-dashed border-slate-600'>
                        <GrAdd />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create a time log</DialogTitle>
                        <DialogDescription>
                            Fill in the form below to add a new time log.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Date
                            </Label>
                            <DatePicker />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="hours" className="text-right">
                                Hours
                            </Label>
                            <Input id="hours" type='number' placeholder='2' min={0} max={24} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="note" className="text-right">
                                Note
                            </Label>
                            <Input id="note" placeholder='Type your note' className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default LogAdd