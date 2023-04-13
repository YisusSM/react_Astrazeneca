import { getServicesByGroup, listenStatus } from "@/helpers/axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { socket } from "@/helpers/socket"

export default function DashboardTable() {
  const dispatch = useDispatch()
  const { servicesByGroup } = useSelector(state => state.services)

  useEffect(() => {
    dispatch(getServicesByGroup('DEV'))

    socket.on('service:update', () => {
      dispatch(getServicesByGroup('DEV'))
    })
  }, [])

  const statusColor = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-400',
    red: 'bg-red-600'
  }

  const drawItems = servicesByGroup.map(service => {
    return (
      <tr key={ service.name } className="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{ service.name }</td>
        <td className="whitespace-nowrap px-6 py-4">{ service.group }</td>
        <td className="whitespace-nowrap px-6 py-4 flex justify-center">
          <div className={`rounded-full h-6 w-6 ${statusColor[service.current_system_status]} border-solid border-1 border-gray-950`}>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-6">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Group
                  </th>
                  <th scope="col" className="px-6 py-4">
                    System Status
                  </th>
                </tr>
              </thead>
              <tbody>
                { drawItems }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
