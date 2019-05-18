import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader';
import styles from './PageHeaderLayout.less';

export default ({ children, wrapperClassName, top, ...restProps }) => (
	<div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
		{top}
		<PageHeader key="pageheader" {...restProps} linkElement={Link} />
		{children ? <div className={styles.content}>{children}</div> : null}
	</div>
);
