interface WeatherTypes {
  address: string
  alerts: any[]
  currentConditions: CurrentConditions
  days: DayType[]
  description: string
  latitude: number
  longitude: number
  queryCost: number
  resolvedAddress: string
  stations: Stations
  timezone: string
  tzoffset: number
}

interface CurrentConditions {
  cloudcover: number
  conditions: string
  datetime: string
  datetimeEpoch: number
  dew: number
  feelslike: number
  humidity: number
  icon: string
  moonphase: number
  precip: number
  precipprob?: any
  preciptype?: any
  pressure: number
  snow: number
  snowdepth: number
  solarenergy?: any
  solarradiation: number
  stations: string[]
  sunrise: string
  sunriseEpoch: number
  sunset: string
  sunsetEpoch: number
  temp: number
  uvindex: number
  visibility: number
  winddir: number
  windgust?: any
  windspeed: number
}

interface Hour {
  cloudcover: number
  conditions: string
  datetime: string
  datetimeEpoch: number
  dew: number
  feelslike: number
  humidity: number
  icon: string
  precip: number
  precipprob: number
  preciptype?: any
  pressure: number
  severerisk: number
  snow: number
  snowdepth: number
  solarenergy?: number
  solarradiation: number
  source: string
  stations?: any
  temp: number
  uvindex: number
  visibility: number
  winddir: number
  windgust: number
  windspeed: number
}

interface DayType {
  cloudcover: number
  conditions: string
  datetime: string
  datetimeEpoch: number
  description: string
  dew: number
  feelslike: number
  feelslikemax: number
  feelslikemin: number
  hours: Hour[]
  humidity: number
  icon: string
  moonphase: number
  precip: number
  precipcover: number
  precipprob: number
  preciptype?: any
  pressure: number
  severerisk: number
  snow: number
  snowdepth: number
  solarenergy: number
  solarradiation: number
  source: string
  stations?: any
  sunrise: string
  sunriseEpoch: number
  sunset: string
  sunsetEpoch: number
  temp: number
  tempmax: number
  tempmin: number
  uvindex: number
  visibility: number
  winddir: number
  windgust: number
  windspeed: number
}

interface Stations {
  OIIE: OIIE
  OIIP: OIIP
  OIII: OIII
}

interface OIIE {
  contribution: number
  distance: number
  id: string
  latitude: number
  longitude: number
  name: string
  quality: number
  useCount: number
}

interface OIIP {
  contribution: number
  distance: number
  id: string
  latitude: number
  longitude: number
  name: string
  quality: number
  useCount: number
}

interface OIII {
  contribution: number
  distance: number
  id: string
  latitude: number
  longitude: number
  name: string
  quality: number
  useCount: number
}

export {
  WeatherTypes,
  CurrentConditions,
  Hour,
  DayType,
  Stations,
  OIIE,
  OIIP,
  OIII,
}
