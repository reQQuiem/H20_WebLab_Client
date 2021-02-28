import { BlogEntry } from "./blog-entry";

export class Travelblog {

    _id: string;
    title: string;
    destination: string;
    departure: Date;
    arrival: Date;
    abstract: string;
    entries: BlogEntry[];

    constructor(title: string, entries: BlogEntry[] = []) {
        this.title = title;
        this.entries = entries;
    }
}