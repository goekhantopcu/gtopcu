export class Skill {
    readonly title: string
    readonly percentage: number

    constructor(title: string, percentage: number) {
        this.title = title;
        this.percentage = percentage;
    }
}
