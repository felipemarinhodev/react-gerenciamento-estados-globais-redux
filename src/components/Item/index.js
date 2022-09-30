import styles from './Item.module.scss';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'

const iconePros = {
	size: 24,
	color: '#041833'
}

export default function Item(props) {
	const {
		titulo,
		foto,
		preco,
		descricao,
		favorito
	} = props;

	return (
		<div className={styles.item}>
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
							? <AiFillHeart {...iconePros} color='#ff0000' className={styles['item-acao']} />
							: <AiOutlineHeart {...iconePros} className={styles['item-acao']} />}
						<FaCartPlus {...iconePros} color={true ? '#1875e8' : iconePros.color}
							className={styles['item-acao']} />
					</div>
				</div>
			</div>
		</div>
	)
}
