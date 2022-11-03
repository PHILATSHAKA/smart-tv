import { Photos } from "../../App";
import { Gallery } from "react-grid-gallery";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
interface PhotosProps {
  photos: Photos[];
}
export const PhotosComponent = ({ photos }: PhotosProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<boolean>(false);
  const [pictures, setPictures] = useState<Photos[]>([]);

  useEffect(() => {
    setPictures(photos);
  }, [photos]);

  const handlePhotos = (item?: any) =>
    pictures.map((photo) => ({
      src: photo.urls.small,
      width: 400,
      height: 300,
      alt: photo.description,
      id: photo.id,
      isSelected: selectedPhoto,
    }));

  return (
    <Row justify="center" gutter={32}>
      <Col span={16}>
        <Gallery
          maxRows={5}
          rowHeight={200}
          defaultContainerWidth={10}
          margin={5}
          images={handlePhotos()}
        />
      </Col>
    </Row>
  );
};

export default PhotosComponent;
