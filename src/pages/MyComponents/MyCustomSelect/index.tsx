import { useState } from 'react';
import { Select, type SelectOption } from './Select';
import styles from './Index.module.css';

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function MyCustomSelect() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <div className='send-box'>
      <div className={`card ${styles.box}`}>
        <Select multiple options={options} value={value1} onChange={(o) => setValue1(o)} />
        <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
      </div>
    </div>
  );
}

export default MyCustomSelect;
