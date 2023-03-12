export type AcceptableTypeLabelValue = string | number;

export type LabelValue<T extends AcceptableTypeLabelValue> = {
  label: string;
  value: T;
};
