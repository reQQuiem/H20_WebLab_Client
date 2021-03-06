import { BlogEntry } from "./blog-entry";

export class Travelblog {

    _id: string;
    title: string;
    destination: string;
    departure: Date;
    arrival: Date;
    abstract: string;
    entries: BlogEntry[];
    owner: string;

    constructor(entries: BlogEntry[] = []) {
        this.entries = entries;
    }
}