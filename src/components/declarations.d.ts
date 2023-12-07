declare module '*.module.scss' {
  const scss: { [key: string]: string };
  export default scss;
}

declare module '*.json' {
  const value: any;
  export default value;
}