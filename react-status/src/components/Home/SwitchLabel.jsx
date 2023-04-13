import React from 'react'

export const SwitchLabel = () => {
    return (
        <div class="inline-flex items-center">
            <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                <input
                    id="auto-update"
                    type="checkbox"
                    class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                />
                <label
                    for="auto-update"
                    class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                >
                    <div
                        class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                        data-ripple-dark="true"
                    ></div>
                </label>
            </div>
            <label
                for="auto-update"
                class="mt-px ml-3 mb-0 cursor-pointer select-none font-light text-gray-700"
            >
            </label>
        </div>
    )
}
