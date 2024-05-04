import styles from "./User.module.css";

function Users({ openTab, active, i, n }) {
  return (
    <div
      className={`tablinks ${i === active ? "active" : ""}`}
      style={{ position: "relative" }}
      onClick={openTab}
      data-index={i}
    >
      <img className={styles.chatPhoto} src={n.photo} alt="photo" />
      {n.name}
      {n.status && (
        <img className={styles.imgStatus} src={n.status} alt="status" />
      )}
    </div>
  );
}

export default Users;
