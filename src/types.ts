export type WeatherResponse = {
  location: string;
  temperature: number;
  description: string;
  icon: string;
  minMaxTemp: {
    min: number;
    max: number;
  };
};
