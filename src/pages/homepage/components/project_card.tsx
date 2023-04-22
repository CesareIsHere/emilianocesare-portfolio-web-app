import { Card, Space, Tag } from "antd";
import { ExpandAltOutlined, GithubOutlined } from "@ant-design/icons";
import { SkillsCardProps } from "../../../data/interfaces";
import SkillModel from "../../../data/models/skill_model";
import { Link } from "react-router-dom";

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card
      className="w-1/5 m-2"
      style={{ minWidth: "400px" }}
      //cover={<img alt="example" src={props.image} />}
      actions={[
        <Link key="githubLink" to={props.githubLink} target="_blank">
          <GithubOutlined key="github" style={{ fontSize: "28px" }} />
        </Link>,
        <ExpandAltOutlined
          key="expand"
          style={{ fontSize: "28px" }}
          onClick={props.onExpandClick}
        />,
      ]}
    >
      <div onClick={props.onExpandClick}>
        <div className="flex flex-col h-28 overflow-y-auto ">
          <p className="font-bold text-xl">{props.title}</p>
          <p>{props.description}</p>
        </div>
        <div className="flex flex-row mt-4">
          {props.skills.map((skill: SkillModel) => {
            return (
              <Tag
                color={skill.color}
                bordered={false}
                className="shadow-xl"
                key={skill.name}
              >
                {skill.name}
              </Tag>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  skills: SkillModel[];
  image: string;
  githubLink: string;
  onExpandClick: () => void;
}
