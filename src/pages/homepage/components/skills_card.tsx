import React from "react";
import { Avatar, Space, Tag, Card } from "antd";
import SkillModel from "../../../data/models/skill_model";
import { SkillsCardProps } from "../../../data/interfaces";

export default function SkillsCard(props: any, skills: SkillsCardProps) {
  return (
    <Card className="hover:border-blue-600 hover:border-2 border-2">
      <p className="text-base font-semibold flex flex-row justify-center">
        {props.title}
      </p>
      <div className="flex flex-row justify-center items-center mt-2">
        <Space>
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
        </Space>
      </div>
    </Card>
  );
}
