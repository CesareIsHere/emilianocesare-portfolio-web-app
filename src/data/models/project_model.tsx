import SkillModel from "./skill_model";

export default class ProjectModel {
  title: string;
  description: string;
  skills: SkillModel[];
  githubUrl: string;

  constructor(
    title: string,
    description: string,
    skills: SkillModel[],
    githubUrl: string
  ) {
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.githubUrl = githubUrl;
  }

  fromJson(json: any) {
    this.title = json.title;
    this.description = json.description;
    this.skills = json.skills.map(
      (skill: any) => new SkillModel(skill.name, skill.color)
    );
    this.githubUrl = json.githubUrl;
    return this;
  }

  toJson() {
    return {
      title: this.title,
      description: this.description,
      skills: this.skills,
      githubUrl: this.githubUrl,
    };
  }
}
