export class SkillModel {
    readonly icon: string;
    readonly title: string
    readonly description: string;

    constructor(icon: string, title: string, description: string) {
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
}
