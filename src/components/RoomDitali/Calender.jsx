/* eslint-disable no-undef */
import { DateRange } from 'react-date-range';
const Calender = ({value, handleDateChange}) => {
    // console.log(value);
    return (
     <DateRange
         rangeColors={[ "#6e67da" ]}  
         ranges={[value]}
        direction='vertical'
        showDateDisplay={false}
        onChange={handleDateChange}
     ></DateRange>
     
    );
};

export default Calender;