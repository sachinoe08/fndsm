import React, { Fragment, ReactElement } from 'react';
import {
  IconCheckCircle,
  IconChevronLeft,
  IconCircle,
  IconHome,
  IconQuestionCircle,
  IconTimes,
  IconTimesCircle,
  IconTruck,
} from '../components';

export type ReplaceMap = Record<string, string>;
export type ComponentsMap = Record<string, React.FC>;

const createIconMap = () => ({
  'icon:circle': IconCircle,
  'icon:checkCircle': IconCheckCircle,
  'icon:questionCircle': IconQuestionCircle,
  'icon:times': IconTimes,
  'icon:chevronLeft': IconChevronLeft,
  'icon:home': IconHome,
  'icon:timesCircle': IconTimesCircle,
  'icon:truck': IconTruck,
});

export const replacePatternInString = (string: string, data?: ReplaceMap) => {
  string = replaceByVariables(string, data);
  if (string.search(/{{icon:\S+}}/) !== -1) {
    let parts: (string | ReactElement | (string | ReactElement)[])[] = string.split(' ');
    parts = replaceByComponents(createIconMap(), parts);
    return (
      <>
        {parts.map((part, index) => (
          <Fragment key={index}>{part}</Fragment>
        ))}
      </>
    );
  } else {
    return string;
  }
};

const replaceByComponents = (
  data: ComponentsMap,
  parts: (string | React.ReactElement | (string | React.ReactElement)[])[]
) => {
  for (const key in data) {
    parts = parts.map((part, index: number) => {
      if (typeof part === 'string') {
        if (part.indexOf(key) !== -1) {
          return React.createElement(data[key], {});
        } else {
          return restoreSpaces(index, part, parts.length);
        }
      }
      return part;
    });
  }
  return parts;
};

const replaceByVariables = (string: string, data: ReplaceMap = {}) =>
  Object.entries(data).reduce(
    (res, [key, value]: [string, string]) =>
      res.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), value),
    string
  );

const restoreSpaces = (index: number, part: string, total: number) =>
  (index > 0 ? ' ' : '') + part + (index < total ? ' ' : '');
