import { Image } from "./action";

type navItem = {
  title: string;
  href: string;
};

type NavItems = {
  [key: string]: navItem;
};

export type NavbarProps = {
  locale: string;
  logo: Image;
  navitems: NavItems;
  title: string;
  uid: string;
};
