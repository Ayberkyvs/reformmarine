import { MenuProps } from "antd"

export interface typeMenu {
    label: string;
    isDropdown: boolean;
    href?: string | undefined | null;
    items?: MenuProps["items"];
}