import { atom } from "jotai";

const urlParams = window.location.pathname;

export const sideNavItem = atom(urlParams);
