import { useSelector } from 'react-redux';
import Header from 'components/Header';
import styles from './Carrinho.module.scss';
import Item from 'components/Item';

export default function Carrinho() {

	const { carrinho, total } = useSelector(state => {
		let total = 0;
		const carrinho = state.carrinho.reduce((itens, itemNoCarrinho) => {
			const item = state.itens.find(item => item.id === itemNoCarrinho.id);
			total += (item.preco * itemNoCarrinho.quantidade)
			itens.push({
				...item,
				quantidade: itemNoCarrinho.quantidade,
			});
			return itens;
		}, [])
		return { carrinho, total };
	});

	return (
		<div>
			<Header
				titulo='Carrinho de compras'
				descricao='Confira produros que você adicionou ao carrinho.'
			/>
			<div className={styles.carrinho}>
				{carrinho.length > 0
					? carrinho.map(item => <Item key={item.id} {...item} carrinho />)
					: <p>O seu carrinho está vazio.</p>
				}
				<div className={styles.total}>
					<strong>Resumo da compra</strong>
					<span>
						Subtotal: <strong> R$ {total.toFixed(2)}</strong>
					</span>
				</div>
			</div>
		</div>
	)
}
