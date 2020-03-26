import { DARK_MODE } from './type';

export const toggleDarkMode = (darkmode) => ({
  type: darkmode ? DARK_MODE.OFF : DARK_MODE.ON,
});
