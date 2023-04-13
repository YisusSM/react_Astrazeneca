import { io } from 'socket.io-client'

const URL = process.env.NEXT_PUBLIC_IP_CONFIG

export const socket = io(URL)