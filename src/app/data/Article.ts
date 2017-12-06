export class Article{
    public id: string;
    public headline: string;
    public snippet: string;
    public url: string;
    public authority: string;

    constructor(id, headline, snippet, url, authority){
        this.id = id;
        this.headline = headline;
        this.snippet = snippet;
        this.url = url;
        this.authority = authority;
    }
}