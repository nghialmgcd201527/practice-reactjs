import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Teenage HeartBreak",
      thumbnailUrl:
        "https://avatar-ex-swe.nixcdn.com/playlist/2022/05/12/1/d/f/4/1652337086418_300.jpg",
    },
    {
      id: 2,
      name: "Tín Hiệu Vũ Trụ",
      thumbnailUrl:
        "https://avatar-ex-swe.nixcdn.com/playlist/2022/12/26/4/5/9/7/1672024735335_300.jpg",
    },
    {
      id: 3,
      name: "Giai Điệu Chữa Lành",
      thumbnailUrl:
        "https://avatar-ex-swe.nixcdn.com/playlist/2022/12/26/4/5/9/7/1672028103630_300.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
