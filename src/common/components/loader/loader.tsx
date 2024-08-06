export type LoaderProps = {
  tip?: string
  loading?: boolean
}

const Loader: React.FC<React.PropsWithChildren<LoaderProps>> = ({
  tip = "Loading...",
  loading = true,
  children,
}) =>
  loading ? (
    <div className="loader">
      <span className="loader-tip"></span>
      <span className="loader-tip-text">{tip}</span>
    </div>
  ) : (
    children
  )

export default Loader
