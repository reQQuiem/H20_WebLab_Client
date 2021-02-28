export class BlogEntry {

    id: string;
    title: string;
    date: Date;
    location: string;
    text: string;

    constructor(title: string, date: Date) {
        this.title = title;
        this.date = date;
    }
}