import { useEffect, useMemo, useState } from "react"
import {
  getMotionPictureDetails,
  MotionPictureDetailType,
} from "../../../api/get-motion-picture-details"

const useGetMotionPictureDetail = (id?: string) => {
  const [data, setData] = useState<MotionPictureDetailType>()
  const [error, setError] = useState<unknown>()
  const [loading, setLoading] = useState(false)

  const fetchMotionPictureDetail = async (id: string) => {
    setLoading(true)
    setError(undefined)
    try {
      const response = await getMotionPictureDetails(id)
      setData(response)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      fetchMotionPictureDetail(id)
    }
  }, [id])

  return useMemo(() => ({ data, error, loading }), [data, error, loading])
}

export default useGetMotionPictureDetail
