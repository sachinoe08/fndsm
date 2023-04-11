import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import './icon.scss';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart as any);
library.add(fas as any);

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  theme?: ThemeProps;
  solid?: boolean;
  icon: IconProp | 'heart' | 'thumbsUp' | 'thumbsDown';
}

export const Icon: React.FC<IconProps> = (props) => {
  const { className, solid = true, size, theme, ...restProps } = props;
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme,
  });

  const customIcons = {
    heart: faHeart,
    thumbsUp: faThumbsUp,
    faThumbsDown: faThumbsDown,
  };

  if (!solid) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <FontAwesomeIcon icon={customIcons?.[props?.icon] as any} size={size} />;
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <FontAwesomeIcon className={classes} {...restProps} size={size} />;
  }
};
