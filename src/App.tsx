import React, { useEffect, useState } from "react";
import "./App.css";
import TopicMenu from "./componets/layout/toicmenu";
import NavBar from "./componets/layout/navbar";
import { Layout } from "antd";
import SideBar from "./componets/layout/sidebar";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import PhotosComponent from "./componets/Photos/photos";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export interface Topics {
  slug: string;
  title: string;
  description: string;
  id: string;
}
export interface Photos {
  color: string;
  urls: {
    full: string;
    small: string;
  };
  description?: string;
  id: string;
}
function App() {
  const [selectedKey, setSelectedKey] = useState("0");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [topics, setTopics] = useState<Topics[]>([]);
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/topics?client_id=${process.env.REACT_APP_API_ACCESS_KEY}`
      )
      .then(({ data }) => {
        const topicsData: Topics[] = data.map((topic: Topics) => {
          return {
            slug: topic.slug,
            description: topic.description,
            title: topic.title,
            id: topic.id,
          };
        });
        handlePhotosApiCall(topicsData?.[0]?.slug);
        setSelectedKey(topicsData?.[0]?.slug);
        setTopics(topicsData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error while retrieving topics ", error);
      });
  }, []);

  const changeSelectedKey = (event: any) => {
    const key = event.key;
    setSelectedKey(key);
    handlePhotosApiCall(key);
  };

  const handlePhotosApiCall = (topic: string) => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/topics/${topic}/photos?client_id=${process.env.REACT_APP_API_ACCESS_KEY}`
      )
      .then(({ data }) => {
        const photosData: Photos[] = data.map((photo: Photos) => {
          return {
            color: photo.color,
            urls: {
              full: photo.urls.full,
              small: photo.urls.small,
            },
            description: photo.description,
            id: photo.id,
          };
        });
        setPhotos(photosData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error while retrieving photos ", error);
      });
  };

  if (isLoading) {
    return <Spin indicator={antIcon} />;
  }

  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  return (
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
          <PhotosComponent photos={photos} />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
