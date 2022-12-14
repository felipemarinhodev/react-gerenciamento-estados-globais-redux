import { memo } from 'react';
import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

function Header({
	titulo,
	descricao,
	className = '',
	imagem
}) {
	return (
		<header className={styles.header}>
			{titulo && imagem &&
				<TituloComImagem
					titulo={titulo}
					descricao={descricao}
					imagem={imagem}
					className={className}
				/>
			}
			{titulo && !imagem &&
				<TituloSemImagem
					titulo={titulo}
					descricao={descricao}
					className={className}
				/>
			}
		</header>
	)
}

export default memo(Header);
