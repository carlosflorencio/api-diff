export type Query = {
  params: Record<string, string>;
  headers: Record<string, string>;
  method: string;
  endpoint: string;
  baselineResponse?: any;
};
