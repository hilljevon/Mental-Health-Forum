'use client'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
    { name: 'Total Members', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function StatContent() {
    return (
        <div className='mb-8 grid grid-cols-6 rounded-lg px-3 py-2 leading-6 shadow bg-gray-100'>
            <h3 className='col-span-full font-semibold text-gray-800'>General Page</h3>
            <div className='col-span-2'>
                375k
            </div>
            <div className='col-span-2'>
                87
            </div>
            <div className='col-span-2'>
                Top 1%
            </div>
            <div className="col-span-2">
                <p className='text-neutral-500 text-sm'>Members</p>
            </div>
            <div className="col-span-2">
                <p className='text-neutral-500 text-sm'>Online</p>
            </div>
            <div className="col-span-2">
                <p className='text-neutral-500 text-sm'>Rank</p>
            </div>
        </div>
    )
}
