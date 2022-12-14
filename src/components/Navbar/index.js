import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import {
	RiShoppingCart2Line,
	RiShoppingCartFill
} from 'react-icons/ri';

import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Busca from 'components/Busca';

const iconsProps = {
	color: 'white',
	size: 24
}

export default function Navbar() {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<nav className={styles.nav}>
			<Logo className={styles.logo} onClick={() => navigate('/')} />
			<div className={styles.links}>
				<div>
					<Link to="/" className={classNames(styles.link, {
						[styles.selected]: location.pathname === '/'
					})}
					>
						Página inicial
					</Link>
				</div>

			</div>
			<div className={styles.busca}>
				<Busca />
			</div>
			<div className={styles.icones}>
				<Link to='/carrinho'>
					{location.pathname === '/carrinho'
						?
						<RiShoppingCartFill {...iconsProps} />
						:
						<RiShoppingCart2Line {...iconsProps} />
					}
				</Link>
			</div>
		</nav>
	)
}
