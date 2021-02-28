import { BlogEntry } from "./blog-entry";

export class Travelblog {

    _id: string;
    title: string;
    destination: string;
    traveltime: number; // days
    abstract: string;
    entries: BlogEntry[];

    constructor(title: string, destination: string, traveltime: number, abstract: string, entries: BlogEntry[] = []) {
        this.title = title;
        this.destination = destination;
        this.traveltime = traveltime;
        this.abstract = abstract;
        this.entries = entries;
    }
}