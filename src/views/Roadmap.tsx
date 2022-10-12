import React from "react";

type Props = {};

function Roadmap({}: Props) {
  return (
    <div>
      {backlog.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default Roadmap;

const backlog: {
  status: boolean;
  title: string;
  description?: string;
  date?: string;
}[] = [
  { status: true, title: "general layout implemented" },
  { status: true, title: "Responsive design implemented" },
  { status: false, title: "add apkg compatibility" },
];
