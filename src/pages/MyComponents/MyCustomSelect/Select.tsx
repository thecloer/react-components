import { FC, useEffect, useRef, useState } from 'react';
import styles from './select.module.css';

export type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value?: SelectOption) => void;
};
type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};
type Props = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export const Select: FC<Props> = ({ multiple, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }
  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }
  function selectOption(option: SelectOption) {
    if (multiple) {
      isOptionSelected(option) ? onChange(value.filter((o) => o !== option)) : onChange([...value, option]);
    } else {
      if (!isOptionSelected(option)) onChange(option);
    }
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
    return () => setHighlightedIndex(0);
  }, [isOpen]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          if (!isOpen) setIsOpen(true);
          else {
            let newIndex = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
            newIndex = newIndex < 0 ? options.length - 1 : newIndex >= options.length ? 0 : newIndex;
            setHighlightedIndex(newIndex);
            break;
          }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => containerRef.current?.removeEventListener('keydown', handler);
  }, [isOpen, highlightedIndex, options]);

  return (
    <div ref={containerRef} className={styles.container} tabIndex={0} onClick={() => setIsOpen((prev) => !prev)} onBlur={() => setIsOpen(false)}>
      <span className={styles.value}>
        {multiple
          ? value.map((v) => (
              <button
                key={v.value}
                className={styles['option-badge']}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
              >
                {v.label}
                <span className={styles['remove-button']}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        className={styles['clear-button']}
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map((option, index) => (
          <li
            key={option.value}
            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''} ${index === highlightedIndex ? styles.highlighted : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
