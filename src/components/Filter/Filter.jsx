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
        />
      </>
    );
  }
}

export default Filter;
