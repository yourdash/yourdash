/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

// WORK IN PROGRESS APPLICATION
// https://open-meteo.com/en/docs#***REMOVED***&hourly=temperature_2m,precipitation_probability,weathercode,cloudcover,windspeed_80m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max&current_weather=true&windspeed_unit=mph&timezone=Europe%2FLondon

import BackendModule, { YourDashModuleArguments } from "@yourdash/backend/src/core/moduleManager/backendModule.js";
import weatherPredictionEngine from "./endpoints/predictionEngine.js";
import getWeatherDataForLocationId from "./helpers/getWeatherDataForLocationId.js";
import geolocationApi from "./geolocationApi.js";

export const weatherForecastCache: { [key: string]: { cacheTime: number; data: unknown } } = {};

export default class WeatherModule extends BackendModule {
  constructor(args: YourDashModuleArguments) {
    super(args);
  }

  public loadEndpoints() {
    super.loadEndpoints();

    geolocationApi(this.api.request);

    this.api.request.get("/app/weather/location/:id", async (req, res) => {
      const { id } = req.params;

      if (weatherForecastCache[id]) {
        const currentTime = Math.floor(new Date().getTime() / 1_000);

        if (currentTime > weatherForecastCache[id].cacheTime + 1_800_000 /* 30 minutes */) {
          this.api.core.log.info("app:weather", `Responding with cached weather data for location '${id}'`);
          return res.json({
            ...(weatherForecastCache[id].data as object),
            collectedAt: weatherForecastCache[id].cacheTime,
          });
        }

        delete weatherForecastCache[id];
      }

      return res.json(await getWeatherDataForLocationId(id));
    });

    this.api.request.get("/app/weather/previous/locations", (req, res) => {
      return res.json([]);
    });

    weatherPredictionEngine(this.api.request);
  }
}
