import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
	RiShoppingCart2Line,
	RiShoppingCartFill
} from 'react-icons/ri'

export default function Navbar() {

	const iconsProps = {
		color: 'white',
		size: 24
	}

	return (
		<nav className={styles.nav}>
			<Logo className={styles.logo} />
			<div className={styles.links}>
				<div>
					<a href="/" className={classNames(styles.link, {
						[styles.selected]: window.location.pathname === '/'
					})}>Página inicial</a>
				</div>

			</div>
			<div className={styles.busca}></div>
			<div className={styles.icones}>
				<a href='/carrinho'>
					{window.location.pathname === '/carrinho'
						?
						<RiShoppingCartFill {...iconsProps} />
						:
						<RiShoppingCart2Line {...iconsProps} />
					}
				</a>
			</div>
		</nav>
	)
}
