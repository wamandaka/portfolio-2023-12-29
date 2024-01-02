// SkillCard.js

import React from "react";

const SkillCard = ({ skillName, icon, iconSize, cardWidth, bgColor }) => {
  const IconComponent = icon; // Menggunakan properti ikon sebagai komponen

  return (
    <div
      className={`flex flex-col items-center bg-${bgColor} rounded-xl gap-1 py-2 w-${cardWidth}`}
    >
      <IconComponent size={iconSize} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
