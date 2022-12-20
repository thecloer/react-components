import { FC, useEffect, useRef, useState } from 'react';

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

const Select: FC<Props> = ({ multiple, value, onChange, options }) => {
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
    <div
      ref={containerRef}
      className='relative w-80 min-h-[1.5rem] flex items-center gap-2 p-2 rounded border border-slate-500 focus:border-sky-500'
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className='grow flex flex-wrap gap-2'>
        {multiple
          ? value.map((v) => (
              <button
                key={v.value}
                className='items-center flex gap-1 border border-slate-500 rounded px-1 text-sm hover:bg-red-200 hover:border-red-500 focus::bg-red-200 focus::border-red-500 group'
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
              >
                {v.label}
                <span className='group-hover:text-red-500 group-focus:text-red-500 text-slate-500 text-lg'>
                  &times;
                </span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        className='text-slate-500 text-lg hover:text-red-500 focus:text-red-500'
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className='w-[1px] bg-slate-700 self-stretch'></div>
      <div className='border-t-slate-700 border-[0.25rem] border-transparent translate-y-1/4'></div>
      <ul
        className={`absolute max-h-60 overflow-y-auto border border-slate-700 rounded w-full left-0 top-full z-10 bg-white ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            className={`cursor-pointer py-1 px-2  ${
              index === highlightedIndex ? 'bg-sky-500 text-white' : isOptionSelected(option) ? 'bg-sky-300' : ''
            }`}
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
export default Select;
