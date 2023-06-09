import React, { useState, useEffect } from "react";
import { Avatar, Space, Tag, Card, Modal, Col, Row, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  EyeOutlined,
  PushpinOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import avatar from "../../assets/images/avatar.jpg";
import SkillsCard from "./components/skills_card";
import ProjectCard from "./components/project_card";
import SkillModel from "../../data/models/skill_model";
import GithubRepository from "../../data/repositories/github_repository";
import { Repository } from "../../data/interfaces";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepository, setSelectedRepository] =
    useState<Repository | null>(null);

  const showModal = (repository: Repository) => {
    setSelectedRepository(repository);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedRepository(null);
  };

  const handleOnSearchClick = () => {
    window.open("https://www.google.com/search?q=cesare+emiliano", "_blank");
  };

  useEffect(() => {
    GithubRepository.getPublicRepositories("CesareIsHere").then(
      (repositories) => {
        setRepositories(repositories);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      <body className="w-fit">
        <div className="flex flex-col items-center p-6">
          <div className="flex flex-col items-center h-screen w-screen">
            <div className="border-red-600 border-2 rounded-full p-0.5">
              <Avatar shape="circle" size={172} src={avatar} />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-4xl font-bold">Cesare Emiliano</h1>
              <h2 className="text-2xl font-semibold">Software Developer</h2>
              <div className="flex flex-row items-center">
                <Space>
                  <PushpinOutlined className="text-2xl text-gray-500" />
                  <h3 className="text-2xl font-semibold text-gray-500">
                    Bitonto, IT
                  </h3>
                </Space>
              </div>
            </div>
            <div className="flex flex-row items-center m-8 w-full justify-center">
              <div className="flex flex-row items-center border-2 border-gray-300 rounded-full p-2 justify-center w-2/4">
                <input
                  className=" bg-transparent outline-none p-4 w-full caret-red-200 caret-gray-300 text-xl"
                  placeholder="Come ti posso aiutare?"
                  onKeyDown={(event) =>
                    event.key === "Enter" && handleOnSearchClick()
                  }
                />
                <SearchOutlined
                  className="text-xl text-gray-500 pr-4"
                  onClick={handleOnSearchClick}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-60"></div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold">Skills</h1>
              <br />
              <svg
                className="animate-bounce w-6 h-6 text-gray-9s00"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center  w-3/4 p-4">
            <SkillsCard
              title="Front-End Skills"
              skills={[
                { name: "Dart", color: "blue-inverse" },
                { name: "Flutter", color: "blue" },
                { name: "Typescript", color: "green-inverse" },
                { name: "React", color: "red" },
                { name: "Java", color: "purple" },
              ]}
            />
            <SkillsCard
              title="Back-End Skills"
              skills={[
                { name: "Dart", color: "orange" },
                { name: "Typescript", color: "purple" },
              ]}
            />
            <SkillsCard
              title="Data Analysis Skills"
              skills={[
                { name: "SQL", color: "green" },
                { name: "NoSQL", color: "pink" },
              ]}
            />
            <SkillsCard
              title="Cloud Computing Skills"
              skills={[
                { name: "Google Cloud Platform", color: "orange-inverse" },
                { name: "Microsoft Azure", color: "blue" },
              ]}
            />
            <SkillsCard
              title="DevOps Skills"
              skills={[
                { name: "Docker", color: "volcano-inverse" },
                { name: "App Store Deploy", color: "purple-inverse" },
                { name: "Play Store Deploy", color: "green-inverse" },
              ]}
            />
            <SkillsCard
              title="Other Skills"
              skills={[
                { name: "Git", color: "gold-inverse" },
                { name: "Github", color: "green-inverse" },
                // { name: "Jira", color: "pink-inverse" },
              ]}
            />
            <SkillsCard
              title="UI/UX Design Skills"
              skills={[{ name: "Figma", color: "red" }]}
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-24">
            <h1 className="text-4xl font-bold">Github repositories</h1>
            {isLoading ? (
              <div className="flex flex-wrap justify-center mt-4 w-screen">
                Caricamento...
              </div>
            ) : (
              <div className="flex flex-wrap justify-center mt-4 w-screen">
                {repositories.map((repository) => (
                  <ProjectCard
                    key={repository.id}
                    title={repository.name}
                    description={repository.description}
                    skills={[
                      new SkillModel(repository.language, "blue-inverse"),
                    ]}
                    image=""
                    githubLink={repository.html_url}
                    onExpandClick={() => showModal(repository)}
                  />
                ))}

                <RepositoryModal
                  repository={selectedRepository}
                  visible={isModalOpen}
                  onClose={handleCancel}
                />
              </div>
            )}
          </div>
        </div>
      </body>
    </>
  );
}

interface RepositoryModalProps {
  repository: Repository | null;
  visible: boolean;
  onClose: () => void;
}

export const RepositoryModal: React.FC<RepositoryModalProps> = ({
  repository,
  visible,
  onClose,
}) => {
  const { Paragraph, Title } = Typography;

  if (repository == null) {
    return <></>;
  }

  return (
    <Modal
      title={repository.name}
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Paragraph>{repository.description}</Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Paragraph>
            <strong>Linguaggio:</strong>{" "}
            <Tag color="success">{repository.language}</Tag>
          </Paragraph>
          <Paragraph>
            <strong>Stelle:</strong>{" "}
            <Tag icon={<StarOutlined />} color="yellow">
              {repository.stargazers_count}
            </Tag>
          </Paragraph>
          <Paragraph>
            <strong>Watchers:</strong>{" "}
            <Tag icon={<EyeOutlined />} color="blue">
              {repository.watchers_count}
            </Tag>
          </Paragraph>
        </Col>
        <Col span={12}>
          <Paragraph>
            <strong>Issue aperti:</strong>{" "}
            <Tag icon={<ExclamationCircleOutlined />} color="red">
              {repository.open_issues_count}
            </Tag>
          </Paragraph>
          <Paragraph>
            <strong>Data di creazione:</strong>{" "}
            {new Date(repository.created_at).toLocaleDateString()}
          </Paragraph>
          <Paragraph>
            <strong>Ultimo commit:</strong>{" "}
            {new Date(repository.pushed_at).toLocaleDateString()}
          </Paragraph>
        </Col>
      </Row>
      <Paragraph>
        URL:{" "}
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          {repository.html_url}
        </a>
      </Paragraph>
    </Modal>
  );
};
