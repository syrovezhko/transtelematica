import { Dispatch, useEffect, useRef, useState } from 'react';
import './select.css';
import React from 'react';
import {
  CategoryAction,
  CategoryState,
  Category,
  SubCategoryState,
  SubCategoryAction
} from './../../types/types';

type SelectProps = {
  multiple: boolean;
  reduxSetCategory: Dispatch<CategoryAction> & Dispatch<Category>;
  reduxCategory: CategoryState | SubCategoryState;
  reduxDelete: Dispatch<CategoryAction> & Dispatch<string>;
  reduxHighlight: Dispatch<CategoryAction> & Dispatch<number>;
  reduxToggle: Dispatch<CategoryAction> & Dispatch<boolean>;
  parent: number | null;
  reduxDeleteOne?: Dispatch<SubCategoryAction> & Dispatch<Category>;
};

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
  const value = reduxCategory.category as Category;
  const valueMultiple = reduxCategory.categories.filter((i) => i.parent_id == parent) as Category[];
  const multipleCategory = reduxCategory.category as Category[];
  const singleCategory = reduxCategory.category as Category;

  useEffect(() => {
    reduxToggle(isOpen);
    if (isOpen !== reduxCategory.open) {
      setIsOpen(reduxCategory.open);
    }
  }, [isOpen]);

  useEffect(() => {
    reduxHighlight(highlightedIndex);
  }, [highlightedIndex]);

  function selectOption(option: Category) {
    if (multiple) {
      if (!multipleCategory.includes(option)) {
        reduxSetCategory(option);
      }
    } else {
      if (option !== value) reduxSetCategory(option);
    }
  }

  function isOptionSelected(option: Category) {
    return multiple ? multipleCategory.includes(option) : option === reduxCategory.category;
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
      data-testid="container"
      className="container">
      <span
        className="value" 
        data-testid="select"
        >
        {multiple
          ? multipleCategory.map((v) => (
              <button
                key={v.id}
                onClick={(e) => {
                  e.stopPropagation();
                  if (reduxDeleteOne) reduxDeleteOne(v);
                }}
                className="option-badge">
                {v.name}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : singleCategory?.name}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log(e);
          reduxDelete('e');
        }}
        className="clear-btn">
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul data-testid="options" className={`options${isOpen ? ' show' : ''}`}>
        {valueMultiple.map((option, index) => (
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
