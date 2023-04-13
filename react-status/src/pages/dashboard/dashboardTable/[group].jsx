import { getServicesByGroup, listenStatus } from "@/helpers/axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { socket } from "@/helpers/socket"
import { useRouter } from "next/router"
import { PrivateRoute } from "@/components/PrivateRoute"

export default function DashboardTable() {
  const dispatch = useDispatch()
  const { servicesByGroup } = useSelector(state => state.services)
  const router = useRouter()
  const query = router.query.group

  useEffect(() => {
    if (!query) {
      return
    }

    dispatch(getServicesByGroup(query))

    socket.on('service:update', () => {
      dispatch(getServicesByGroup(query))
    })
  }, [query])

  const statusColor = {
    green: '#06d6a0',
    yellow: '#ffd166',
    red: '#ef476f'
  }

  const onRowClick = (row) => {
    router.push({
      pathname: '/dashboard/serviceInfo/[name]',
      query: {
        name: row
      }
    })
  }

  const drawItems = servicesByGroup.map(service => {
    return (
      <tr onClick={ () => {onRowClick(service.name) } } key={ service.name } className="border-b border-neutral-200 hover:bg-neutral-200 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{ service.name }</td>
        <td className="whitespace-nowrap px-6 py-4">{ service.group }</td>
        <td className="whitespace-nowrap px-6 py-4 flex justify-center">
          <div style={{backgroundColor: statusColor[service.current_system_status]}} className='shadow-md rounded-full h-6 w-6 border-solid border-1 border-gray-950'>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <>
    <div className="bg-white px-6 lg:flex h-screen w-full flex-col lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="pt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Dashboard</h2>
      </div>
      <div className="flex flex-col overflow-x-auto h-screen w-full">
        <div className="sm:-mx-6 lg:-mx-6">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="table-fixed min-w-full text-center text-sm font-light text-neutral-800">
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
    </div>
    </>
  )
}
DashboardTable.Auth = PrivateRoute
