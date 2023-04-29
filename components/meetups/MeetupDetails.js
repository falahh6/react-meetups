import styles from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <img className={styles.img} src={props.image} alt={props.title} />
      <p className={styles.des}>{props.description}</p>
    </>
  );
};

export default MeetupDetails;
