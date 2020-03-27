import { DARK_MODE } from './type';

export const darkModeOn = () => ({
  type: DARK_MODE.ON,
});

export const darkModeOff = () => ({
  type: DARK_MODE.OFF,
});
