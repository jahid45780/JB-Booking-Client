const Heading = ({ title, subtitle, center }) => {
    return (
      <div className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-bold mt-3'>{title}</div>
        <div className='font-light text-green-400  mt-2'>{subtitle}</div>
      </div>
    )
  }
  
  export default Heading