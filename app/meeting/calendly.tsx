"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    return ( 
    <div className="w-full ">
      <InlineWidget
      styles={{ height: "1000px" }}
      url="https://calendly.com/kodekalp/get-connect-with-kodekalp" />
    </div> );
}
 
export default Calendly;