import { PrivateRoute } from "@/components/PrivateRoute";
import { getIncidentHistory } from "@/helpers/axios";
import { socket } from "@/helpers/socket";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function IncidentHistory() {
  const dispatch = useDispatch()
  const { incidentHistory } = useSelector(state => state.services)
  useEffect(() => {
    dispatch(getIncidentHistory())

    socket.on('service:update', () => {
      dispatch(getIncidentHistory())
    })
  }, [])

  const statusColor = {
    green: "text-green-500",
    yellow: "text-yellow-600",
    red: "text-red-600",
  };

  const drawItems = incidentHistory.map((i) => {
    return (
      <div key={i.date} className="min-w-0 flex-1">
        <h2 className="border-b-2 border-b-black py-4 mb-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          { i.date }
        </h2>
        <div className="flex flex-col gap-4">
          {
            i.history.map((h, index) => {
              return (
                <div key={index} className="mt-1 flex flex-col sm:mt-0 sm:flex-wrap">
                  <h3 className={`${ statusColor[h.system_status] }`}>{ h.service }</h3>
                  <h3 className='text-black'>{ h.reason }</h3>
                  <h4 className="text-black">{ h.date }</h4>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  })

  return (
    <div className="p-4 bg-white h-screen">
      { drawItems }
    </div>
  );
}
IncidentHistory.Auth = PrivateRoute
