import { getGroups } from '@/helpers/axios';
import { socket } from '@/helpers/socket';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SwitchLabel } from './SwitchLabel';

export const Groups = () => {
    const dispatch = useDispatch();
    const { getServicesGroupInsight } = useSelector(state => state.services)

    useEffect(() => {
        dispatch(getGroups())
        socket.on('service:update', () => {
            dispatch(getGroups('DEV'))
        })
    }, [])
    const statusColor = {
        green: 'bg-green-500',
        yellow: 'bg-yellow-400',
        red: 'bg-red-500'
    }
    const groups = useCallback((getServicesGroupInsight ? Object.keys(getServicesGroupInsight).map(service => {
        const value = getServicesGroupInsight[service];
        return (
            <div key={service} className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50 w-screen min-w-full flex justify-between flex-1">
                <div className='flex justify-center flex 1 flex-col '>
                    <h2 className="whitespace-nowrap px-6 py-4 font-medium font-sans text-5xl font-semibold leading-tight tracking-normal antialiased text-xl   ">{service}</h2>
                    <div className='ml-6'><SwitchLabel /></div>
                </div>
                <ul className="whitespace-nowrap px-6 py-4 flex justify-center space-x-2.5">
                    <div class="flex items-center flex-col">
                        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="mt-px md:text-xs">{value.green}</div>
                        </div>
                        <span className='font-medium md:text-xs font-sans font-semibold text-xs'>Online</span>
                    </div>
                    <div class="flex items-center flex-col">
                        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="mt-px md:text-xs">{value.yellow}</div>
                        </div>
                        <span className='font-medium md:text-xs font-sans font-semibold text-xs'>Issue</span>
                    </div>
                    <div class="flex items-center flex-col">
                        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="mt-px md:text-xs">{value.red}</div>
                        </div>
                        <span className='font-medium md:text-xs font-sans font-semibold text-xs'>Offline</span>
                    </div>
                </ul>

            </div>
        )
    }) : null))

    return (
        <>
            <div className='h-screen flex flex-col'>
                {groups}
            </div>
        </>

    )
}
