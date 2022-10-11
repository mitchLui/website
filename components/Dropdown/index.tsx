import React from 'react';
import dropdownStyles from './Dropdown.module.scss';

type DropdownProps = {
    htmlFor: string;
    onChange: (value: string) => void;
    label: string;
    options: Record<string, Array<{
            value: string;
            text: string
    }>>;
}

const Dropdown = ({ htmlFor, onChange, label, options }: DropdownProps): React.ReactElement =>
  <>
    <label className={dropdownStyles.label} htmlFor={htmlFor}>{label}</label>
    <select className={dropdownStyles.menu} onChange={(e) => onChange(e.target.value)} name={'Sort by:'} id={htmlFor} defaultValue={'none'}>
      {Object.keys(options).map((key) =>
        <optgroup key={key} label={key}>
          {options[key].map((option) =>
            <option key={option.value} value={option.value}>{option.text}</option>
          )}
        </optgroup>
      )}
    </select>
  </>;

export default Dropdown;