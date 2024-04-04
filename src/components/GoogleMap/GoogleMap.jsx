import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div className=' font-bold text-2xl' >{text}</div>;

const GoogleMap = () => {

    const defaultProps = {
        center: {
          lat: 23.7956,
          lng: 90.3537
        },
        zoom: 10
      };

    return (
        <div className=' mt-2 ' style={{ height: '60vh'}} >
  


 <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={23.7956}
          lng={90.3537}
          text="JB Booking Office "
        />
      </GoogleMapReact>
            
        </div>
    );
};

export default GoogleMap;