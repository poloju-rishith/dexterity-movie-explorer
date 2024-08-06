import { RouteObject } from "react-router-dom"
import MotionPictureSearch from "../pages/motion-picture-search"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MotionPictureSearch />,
  },
  {
    path: "/detail/:id",
    lazy: async () => {
      const { default: MoviePictureDetail } = await import(
        "../pages/motion-picture-detail"
      )
      return {
        Component: MoviePictureDetail,
      }
    },
  },
]
