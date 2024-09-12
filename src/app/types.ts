export type NavItem = {
    label: string;
    href: string;
    icon: string;
    disabled: boolean;
    subItems?: NavItem[];
}