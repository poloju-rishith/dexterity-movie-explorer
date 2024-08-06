type AlertProps = {
  message: string
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="alert-container">
      <span className="alert-text">{message}</span>
    </div>
  )
}

export default Alert
