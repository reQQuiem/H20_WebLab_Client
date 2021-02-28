export class BlogEntry {

    id?: string;
    title: string;
    date: Date;
    location?: string;
    text: string;

    constructor(title: string, date: Date, text: string) {
        this.title = title;
        this.date = date;
        this.text = text;
    }
}