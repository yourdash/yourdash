/*
 * Copyright (c) 2023 YourDash contributors.
 * YourDash is licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from "react";
import { IWeatherDataForLocation } from "../shared/weatherDataForLocation";
import WeatherApplicationLocationPage from "./LocationPage";
import { useParams } from "react-router"
import csi from "web-client/src/helpers/csi";
import { Spinner } from "web-client/src/ui/index";

const WeatherApplicationLocationById: React.FC = () => {
  const { id } = useParams();
  
  const [locationData, setLocationData] = React.useState<null | IWeatherDataForLocation>( null )
  
  React.useEffect( () => {
    csi.getJson( `/app/weather/location/${ id }`, data => {
      setLocationData( data )
    } )
  }, [id] );
  
  if ( locationData !== null ) {
    return <WeatherApplicationLocationPage weatherData={locationData}/>
  }
  
  return <div className={"w-full min-h-full flex items-center justify-center"}>
    <Spinner/>
  </div>
}

export default WeatherApplicationLocationById