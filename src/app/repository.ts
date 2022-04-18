export class Repository {
    constructor(
        public name:string,
        public language : string,
        public fork_count:string,
        public description:string,
        public html_url:string,
        public created_at:Date
){}
}
