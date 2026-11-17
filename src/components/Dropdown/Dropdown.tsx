import { ReactElement } from 'react';
import styles from './Dropdown.module.css';

type DropdownProps = {
  className: string;
  onChange: (value: string) => void;
  label: string;
  options: Record<string, Array<{
    value: string;
    text: string
  }>>;
};

export const Dropdown = ({ className, onChange, label, options }: DropdownProps): ReactElement =>
  <>
    <label className={styles.dropdownLabel} htmlFor={className}>{label}</label>
    <select className={styles.dropdownMenu} onChange={(e) => onChange(e.target.value)} name={'Sort by:'} id={className} defaultValue={'none'}>
      {Object.keys(options).map((key) =>
        <optgroup key={key} label={key}>
          {options[key].map((option) =>
            <option key={option.value} value={option.value}>{option.text}</option>
          )}
        </optgroup>
      )}
    </select>
  </>;
