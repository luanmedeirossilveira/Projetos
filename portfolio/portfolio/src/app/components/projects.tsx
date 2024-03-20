"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { projectList } from "@/data/projects";



const pageSize = 2; // Define o número de itens por página

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * pageSize;
  const currentPageData = projectList.slice(offset, offset + pageSize);

  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold">
        Projetos <span className="text-sky-500 font-bold">Recentes</span>
      </h2>

      <div className="flex gap-4 flex-row my-4">
        {currentPageData.map((project, index) => (
          <Card
            key={index}
            className="py-4 px-10 border-sky-400 bg-transparent w-96"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="whitespace-normal">{project.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(projectList.length / pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName="text-white bg-sky-700 rounded-md w-10 h-10 flex justify-center items-center"
        className="flex gap-4 flex-row my-4"
        pageClassName="text-white bg-sky-500 rounded-md w-10 h-10 flex justify-center items-center"
        nextClassName="text-white bg-sky-300 rounded-md w-10 h-10 flex justify-center items-center"
        previousClassName="text-white bg-sky-300 rounded-md w-10 h-10 flex justify-center items-center"
      />
    </section>
  );
}
