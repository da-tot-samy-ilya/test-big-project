declare module '*.module.scss';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
declare module '*.png';
declare module '*.jpg';

declare const _IS_DEV_: boolean
