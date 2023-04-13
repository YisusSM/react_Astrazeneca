import { PrivateRoute } from "@/components/PrivateRoute";
import { getServiceInfo } from "@/helpers/axios";
import { socket } from "@/helpers/socket";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceInfo(params) {
  const dispatch = useDispatch();
  const { serviceInfo } = useSelector((state) => state.services);
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (!query.name) {
      return
    }

    dispatch(getServiceInfo(query.name));

    socket.on("service:update", () => {
      dispatch(getServiceInfo(query.name));
    });
  }, [router.query.name])

  const statusColor = {
    green: "text-green-500",
    yellow: "text-yellow-600",
    red: "text-red-600",
  };

  const serviceStatus = {
    green: "SERVICE AVAILABLE",
    yellow: "SERVICE DISRUPTION",
    red: "SERVICE OUTAGE",
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.toDateString()} - ${d.toLocaleTimeString()}`;
  };

  const navigateToParent = (parent) => {
    router.push({
      pathname: "/dashboard/serviceInfo/[name]",
      query: {
        name: parent,
      }
    })
  };

  const drawHistoryItem = () => {
    if (!serviceInfo.history || serviceInfo.history.length === 0) {
      return (
        <>
          <div className="flex flex-col overflow-x-auto">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 text-center py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  No Data
                </h3>
              </div>
            </div>
          </div>
        </>
      );
    }

    return serviceInfo.history.map((h) => {
      return (
        <div
          key={h.date}
          className="shrink shadow-md flex flex-col overflow-x-auto"
        >
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {formatDate(h.date)}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                System status:{" "}
                <span className={statusColor[h.system_status]}>
                  {serviceStatus[h.system_status]}
                </span>
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Reason</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {h.reason}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Incident Number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {h.incident_number}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {h.status}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Depends on
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc">
                      {serviceInfo.parents ? (
                        serviceInfo.parents.map((p, index) => {
                          return (
                            <li key={index}>
                              <a
                                onClick={() => navigateToParent(p)}
                                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                              >
                                {p}
                              </a>
                            </li>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="bg-white px-6 lg:flex h-screen w-full flex-col lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="pt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            History
          </h2>
        </div>
        <div className="mt-4 flex gap-4 flex-col overflow-x-auto h-screen w-full">
          <div className="sm:-mx-6 lg:-mx-6">
            <div className="flex flex-col gap-4 justify-center inline-block min-w-full py-2 sm:px-6 lg:px-8">
              {drawHistoryItem()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
ServiceInfo.Auth = PrivateRoute