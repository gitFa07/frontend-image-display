import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./features/components/Card"

const App = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    )

    setData(res.data)

    console.log(res.data)
  }

  useEffect(
    function () {
      getData()
    },
    [index],
  )

  let printUserData = (
    <h3 className="text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading
    </h3>
  )

  if (data.length > 0) {
    printUserData = data.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className="bg-zinc-900 w-full h-screen text-white text-4xl overflow-auto p-5">
      {/* Page Number */}

      {/* Images */}
      <div className="flex flex-wrap gap-5 p-2 h-[80%]">{printUserData}</div>
      {/* Buttons */}
      <div className="flex items-center justify-center gap-5 text-xl p-2">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setData([])
            }
          }}
          className="bg-amber-500 p-3 text-black hover:bg-amber-300 cursor-pointer active:scale-95 rounded-xl"
        >
          Previous
        </button>
        <div className="flex items-center justify-center text-black bg-amber-500 text-sm p-1 font-bold rounded-full w-12 h-12">
          <h1>{index}</h1>
        </div>

        <button
          onClick={() => {
            setIndex(index + 1)
            setData([])
          }}
          className="bg-amber-500 p-3 text-black hover:bg-amber-300 cursor-pointer active:scale-95 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
