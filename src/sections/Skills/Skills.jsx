import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"} />
        <SkillList src={checkMarkIcon} skill={"CSS"} />
        <SkillList src={checkMarkIcon} skill={"JavaScript"} />
        <SkillList src={checkMarkIcon} skill={"TypeScript"} />
        <SkillList src={checkMarkIcon} skill={"Python"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Git"} />
        <SkillList src={checkMarkIcon} skill={"Docker"} />
        <SkillList src={checkMarkIcon} skill={"redis"} />
        <SkillList src={checkMarkIcon} skill={"CI/CD"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"react"} />
        <SkillList src={checkMarkIcon} skill={"nextJS"} />
        <SkillList src={checkMarkIcon} skill={"nodeJS"} />
        <SkillList src={checkMarkIcon} skill={"Express"} />
        <SkillList src={checkMarkIcon} skill={"MongoDB"} />
        <SkillList src={checkMarkIcon} skill={"Prisma"} />
        <SkillList src={checkMarkIcon} skill={"Postgres"} />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
