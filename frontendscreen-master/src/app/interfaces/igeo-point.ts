export interface IGeoPoint {  // combined lat and long object from azure
  type: string;
  coordinates: [number];
  crs: ICrs;
}

export interface ICrs {
  type: string;
  properties: IProperties;
}

export interface IProperties {
  name: string;
}
