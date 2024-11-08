import { cx } from 'flairup';
import * as React from 'react';

import { commonInteractionStyles } from '../../Stylesheet/stylesheet';
import Relative from '../Layout/Relative';
import { CategoryNavigation } from '../navigation/CategoryNavigation';

export function Header() {
  return (
    <Relative
      className={cx('epr-header', commonInteractionStyles.hiddenOnReactions)}
    >
      <CategoryNavigation />
    </Relative>
  );
}
