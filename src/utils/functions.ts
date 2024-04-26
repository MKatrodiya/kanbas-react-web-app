export const booleanToYesNo = (value: any): string => {
  return value ? "Yes" : "No";
};

export const YesNoToBoolean = (value: any): boolean => {
  value = value.toLowerCase();
  return value === "yes";
};
