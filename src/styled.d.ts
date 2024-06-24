import "styled-components/macro";

declare module "styled-components" {
    export interface DefaultTheme {
        headerColor: string;
        primaryBackgroundColor: string;
        primaryColor: string;
        primaryTextColor: string;
    }
}
