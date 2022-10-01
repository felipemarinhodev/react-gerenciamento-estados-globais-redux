import classNames from 'classnames';
import { memo } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho } from 'store/reducers/carrinho';

import { mudarFavorito } from 'store/reducers/itens';
import styles from './Item.module.scss';

const iconePros = {
	size: 24,
	color: '#041833'
}

function Item(props) {
	const {
		titulo,
		foto,
		preco,
		descricao,
		favorito,
		id,
		carrinho = false
	} = props;

	const dispatch = useDispatch();
	const estaNoCarrinho = useSelector(state =>
		state.carrinho?.some(itemNoCarrinho =>
			itemNoCarrinho.id === id
		)
	)

	function resolverFavorito() {
		dispatch(mudarFavorito(id));
	}

	function resolverCarrinho() {
		dispatch(mudarCarrinho(id))
	}

	return (
		<div className={classNames(styles.item, {
			[styles.itemNoCarrinho]: carrinho
		})}>
			<div className={styles["item-imagem"]}>
				<img src={foto} alt={titulo} />
			</div>
			<div className={styles["item-descricao"]}>
				<div className={styles["item-titulo"]}>
					<h2>{titulo}</h2>
					<p>{descricao}</p>
				</div>
				<div className={styles["item-info"]}>
					<div className={styles["item-preco"]}>
						R$ {preco.toFixed(2)}
					</div>
					<div className={styles["item-acoes"]}>
						{favorito
							? <AiFillHeart
								{...iconePros}
								color='#ff0000'
								className={styles['item-acao']}
								onClick={resolverFavorito}
							/>
							: <AiOutlineHeart
								{...iconePros}
								className={styles['item-acao']}
								onClick={resolverFavorito}
							/>
						}
						<FaCartPlus
							{...iconePros}
							color={estaNoCarrinho ? '#1875e8' : iconePros.color}
							className={styles['item-acao']}
							onClick={resolverCarrinho}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(Item)
