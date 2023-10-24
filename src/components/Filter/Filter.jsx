import React from 'react';
import styles from './Filter.module.css';

class Filter extends React.Component {
  handleinputChangeFilter = e => {
    //   this.setState({ filter: e.target.value });
    this.props.filter(e.target.value);
  };
  render() {
    return (
      <>
        {' '}
        <h3 className={styles.title_filter}>Find contacts by name</h3>
        <input
          type="text"
          name="number"
          onChange={this.handleinputChangeFilter}
          className={styles.input_filter}
          required
          value={this.props.filterValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </>
    );
  }
}

export default Filter;
