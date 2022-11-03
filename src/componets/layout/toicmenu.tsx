import React from "react";
import { Menu } from "antd";
import { Topics } from "../../App";

interface ParentCompProps {
  topics: Topics[];
  changeSelectedKey: (event: any) => void;
  selectedKey: string;
}

const TopicMenu = ({
  topics,
  selectedKey,
  changeSelectedKey,
}: ParentCompProps) => {
  const styledTopics: any[] = [];
  topics.forEach((topic: Topics, index: React.Key) =>
    styledTopics.push(
      <Menu.Item key={topic.slug} onClick={changeSelectedKey}>
        {topic.slug}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};
export default TopicMenu;
