import { writable } from "svelte/store";
import type { DeveloperType } from "./types/developer";

const inititalGilde: Array<DeveloperType> = [];

const store = writable(inititalGilde);

export default store;