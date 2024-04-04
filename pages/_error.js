const style = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center'
}

export default function Error({ statusCode }) {

  return (
    <div style={style}>
      <p>
        {statusCode ? `Error ${statusCode}` : `Client Error`}
      </p>
    </div>
  )
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}