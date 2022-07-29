import React, { useState } from "react";
import conho from "../img/conho.jpg";
import bocap from "../img/bocap.jpg";
import bocau from "../img/bocau.jpg";
import canhcut from "../img/canhcut.jpg";
import cavoi from "../img/cavoi.jpg";
import chuot from "../img/chuot.jpg";
import cong from "../img/cong.jpg";
import ech from "../img/ech.jpg";
import gautruc from "../img/gautruc.jpg";
import hama from "../img/hama.jpg";
import kangaru from "../img/kangaru.jpg";
import khi from "../img/khi.jpg";
import soc from "../img/soc.jpg";
import soi from "../img/soi.jpg";
import sutu from "../img/sutu.jpg";
import tho from "../img/tho.jpg";
import AnimalItem from "./AnimalItem";
import Pagination from "./Pagination";

const todoArray = [
  {
    img: conho,
    name: "Con Hổ",
  },
  {
    img: bocap,
    name: "Bò Cạp",
  },
  {
    img: bocau,
    name: "Chim Bồ Câu",
  },
  {
    img: canhcut,
    name: "Chim Cánh Cụt",
  },
  {
    img: cavoi,
    name: "Cá Voi Sát Thủ",
  },
  {
    img: tho,
    name: "Con Thỏ",
  },
  {
    img: sutu,
    name: "Sư Tử",
  },
  {
    img: soc,
    name: "Con Sóc",
  },
  {
    img: hama,
    name: "Hà Mã",
  },
  {
    img: chuot,
    name: "Con Chuột",
  },
  {
    img: soi,
    name: "Con Sói Con",
  },
  {
    img: kangaru,
    name: "Con Kangaru",
  },
  {
    img: cong,
    name: "Con Công",
  },
  {
    img: ech,
    name: "Con Ếch",
  },
  {
    img: gautruc,
    name: "Gấu Trúc",
  },
  {
    img: khi,
    name: "Con Khỉ",
  },
  {
    img: conho,
    name: "Con Hổ",
  },
  {
    img: bocau,
    name: "Bồ Câu",
  },
  {
    img: soc,
    name: "Con Sóc",
  },
  {
    img: bocau,
    name: "Bồ Câu",
  },
  {
    img: bocap,
    name: "Bò Cạp",
  },
  {
    img: sutu,
    name: "Sư Tử",
  },
  {
    img: canhcut,
    name: "Chim Cánh Cụt",
  },
];

const AnimalPage = () => {
  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const renderItem = () => {
    return todoArray
      .slice(pagination.start, pagination.end)
      .map((item, index) => {
        return <AnimalItem key={index} name={item.name} img={item.img} />;
      });
  };

  return (
    <>
      <div className="animalpage">{renderItem()}</div>
      <div className="panigation">
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={todoArray.length}
        />
      </div>
    </>
  );
};

export default AnimalPage;
