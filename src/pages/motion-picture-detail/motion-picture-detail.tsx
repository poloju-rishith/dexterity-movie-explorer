import { Link, useParams } from "react-router-dom"
import useGetMotionPictureDetail from "./hooks/useGetMotionPictureDetail"
import Loader from "../../common/components/loader"
import Alert from "../../common/components/alert"
import Modal from "../../common/components/modal"
import { useReducer } from "react"
import { MotionPictureDetailType } from "../../api/get-motion-picture-details"

type MoreDetailsProps = {
  motionPictureDetail: MotionPictureDetailType
  onClose: () => void
}

const MoreDetails: React.FC<MoreDetailsProps> = ({
  motionPictureDetail,
  onClose,
}) => {
  return (
    <Modal title="More Details" onClose={onClose}>
      <div className="more-details-container">
        <span>
          <strong>Awards: </strong>
          {motionPictureDetail.Awards}
        </span>
        <span>
          <strong>Box Office Performance: </strong>
          {motionPictureDetail.BoxOffice}
        </span>
        {Boolean(motionPictureDetail.Ratings.length) && (
          <div className="ratings">
            <strong>Ratings</strong>
            {motionPictureDetail.Ratings.map((rating) => (
              <div className="rating-container">
                <span className="source">{rating.Source}</span>
                <span className="value">
                  <strong>{rating.Value}</strong>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}

const MotionPictureDetail = () => {
  const [isModalVisible, toggleIsModalVisible] = useReducer(
    (isModalVisible) => !isModalVisible,
    false
  )

  const { id } = useParams<{
    id: string
  }>()

  const { data, error, loading } = useGetMotionPictureDetail(id)

  if (loading) {
    return <Loader tip="Loading movie details..." />
  }

  if (error) {
    return (
      <Alert message="Something went wrong while loading motion picture details. Please try again." />
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="motion-picture-detail">
      <h2>{data.Title}</h2>
      <span className="plot">{data.Plot}</span>
      <img
        src={data.Poster}
        width="100%"
        height="100%"
        className="poster-container"
      />
      <div className="details-container">
        <span>
          {data.Type} released on {data.Released}
        </span>

        <span>
          <strong>Runtime: </strong>
          {data.Runtime}
        </span>

        <span>
          <strong>Genre: </strong>
          {data.Genre}
        </span>

        <span>
          <strong>Directed By: </strong>
          {data.Director}
        </span>

        <span>
          <strong>Cast: </strong>
          {data.Actors}
        </span>

        <span>
          <strong>IMDb Rating: </strong>
          {data.imdbRating}
        </span>

        <button onClick={toggleIsModalVisible}>More details</button>

        <Link to="/">Back to Search</Link>
      </div>

      {isModalVisible && (
        <MoreDetails
          motionPictureDetail={data}
          onClose={toggleIsModalVisible}
        />
      )}
    </div>
  )
}

export default MotionPictureDetail
