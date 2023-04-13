import { getGroups } from '@/helpers/axios';
import { socket } from '@/helpers/socket';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SwitchLabel } from './SwitchLabel';
import Link from 'next/link';

export const Groups = () => {
    const dispatch = useDispatch();
    const { getServicesGroupInsight } = useSelector(state => state.services)
    const gp = {

    }
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
        console.log(service)
        const value = getServicesGroupInsight[service];
        console.log(value, 'hey')
        return (
            <div key={service} className="container mx-auto border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50 flex shadow-md hover:shadow-lg flex-col items-center sm:flex-row sm:max-w-2xl">
                <div className='flex items-center justify-end w-full sm:w-auto'><span class="material-symbols-outlined text-2xl pr-2 pt-2 sm:text-2x1 cursor-pointer">
                    notifications
                </span></div>
                <Link className='flex justify-center flex-1 flex-col items-center text-center w-2/5 sm:w-auto sm:order-2' href={`/dashboard/dashboardTable/${service}`}>
                    <h2 className="px-6 py-4 font-medium font-sans text-5xl font-semibold leading-tight tracking-normal antialiased text-xl">{service}</h2>
                </Link>
                <Link className="px-6 py-4 flex justify-center space-x-2.5 pt-10 cursor-pointer sm:order-1" href={`/dashboard/dashboardTable/${service}`}>
                    {(value.red ? <div class="flex items-center flex-col">
                        <div class="center relative inline-block select-none rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="mt-px md:text-xs">{value.red}</div>
                        </div>
                        <span className='font-medium md:text-xs font-sans font-semibold text-xs'>Offline</span>
                    </div> : null)}
                    {(value.yellow ? <div class="flex items-center flex-col">
                        <div class="center relative inline-block select-none rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="mt-px md:text-xs">{value.yellow}</div>
                        </div>
                        <span className='font-medium md:text-xs font-sans font-semibold text-xs'>Issue</span>
                    </div> : null)}
                    <div class="flex items-center flex-col">
                        <div class="center relative inline-block select-none rounded-lg bg-green-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="mt-px md:text-xs">{value.green}</div>
                        </div>
                        <span className='font-medium md:text-xs font-sans font-semibold text-xs'>Online</span>
                    </div>
                </Link>
            </div>

        )
    }) : null))

    return (
        <>
            <div className='h-screen w-full grid grid-cols-2 gap-4 p-6 pt-8 bg-white max-md:grid-rows-6 max-md:text-xs max-md:grid-cols-1'>
                {groups}
            </div>
        </>

    )
}
