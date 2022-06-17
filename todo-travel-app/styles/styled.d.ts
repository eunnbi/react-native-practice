import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    toDoBg: string;
    disable: string;
    name: string;
  }
}
