import { useEffect, useMemo, useRef, useState } from 'react';
import './select.css';
import React from 'react';

export type SelectOption = {
  name: string;
  id: number;
  flags: string;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
  reduxSetCategory: any;
  reduxCategory: any;
  reduxDelete: any;
  reduxHighlight: any;
  reduxToggle: any;
};

type SingleSelectProps = {
  multiple: false;
  onChange: (value: SelectOption | undefined) => void;
  reduxSetCategory: any;
  reduxCategory: any;
  reduxDelete: any;
  reduxHighlight: any;
  reduxToggle: any;
};

type SelectProps = {
  parent: number;
  options: SelectOption[];
  reduxDeleteOne: any;
} & (SingleSelectProps | MultipleSelectProps);

export function Select({
  multiple,
  reduxSetCategory,
  reduxCategory,
  reduxDelete,
  reduxHighlight,
  reduxToggle,
  parent,
  reduxDeleteOne
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(reduxCategory.open);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const value = reduxCategory.categories.filter((i) => i.parent_id == parent);

  useEffect(() => {
    reduxToggle();
    if (isOpen !== reduxCategory.open) {
      setIsOpen(reduxCategory.open);
    }
  }, [isOpen]);

  useEffect(() => {
    reduxHighlight(highlightedIndex);
  }, [highlightedIndex]);

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (!reduxCategory.category.includes(option)) {
        reduxSetCategory(option);
      }
    } else {
      if (option !== value) reduxSetCategory(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? reduxCategory.category.includes(option) : option === reduxCategory.category;
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(reduxCategory.categories[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < reduxCategory.categories.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, reduxCategory.categories]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className="container">
      <span className="value">
        {multiple
          ? reduxCategory.category.map((v) => (
              <button
                key={v.id}
                onClick={(e) => {
                  e.stopPropagation();
                  reduxDeleteOne(v)
                }}
                className="option-badge">
                {v.name}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : reduxCategory.category?.name}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          reduxDelete();
        }}
        className="clear-btn">
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={`options ${isOpen ? 'show' : ''}`}>
        {value.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.id}
            className={`option ${isOptionSelected(option) ? 'selected' : ''} ${
              index === highlightedIndex ? 'highlighted' : ''
            }`}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
