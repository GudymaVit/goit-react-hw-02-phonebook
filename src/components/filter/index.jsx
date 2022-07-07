import styles from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter_label}>
    Find contacts by name:
    <input name="filter" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
