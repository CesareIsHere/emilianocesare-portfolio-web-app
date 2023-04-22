export default class SkillModel {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  fromJson(json: any) {
    this.name = json.name;
    this.color = json.color;
    return this;
  }

  toJson() {
    return { name: this.name, color: this.color };
  }
}
