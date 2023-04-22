import React from "react";

export default function NavigationItem({
  children,
  onClick,
}: {
  children: any;
  onClick: any;
}) {
  return (
    <div
      className="flex flex-row items-start hover:bg-green-200 rounded-xl p-1"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
