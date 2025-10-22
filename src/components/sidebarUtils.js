export const groupSkills = (skills) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.group]) acc[skill.group] = [];
    acc[skill.group].push(skill.name);
    return acc;
  }, {});
};

export const toggleState = (prevState, key) => {
  return { ...prevState, [key]: !prevState[key] };
};
