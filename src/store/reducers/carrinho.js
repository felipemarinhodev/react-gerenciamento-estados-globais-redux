import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const carrinhoSlice = createSlice({
	name: 'carrinho',
	initialState,
	reducers: {
		mudarCarrinho: (state, { payload }) => {
			const temItem = state.some(item => item.id === payload)
			if (!temItem) {
				return [
					...state,
					{
						id: payload,
						quantidade: 1
					}]
			}
			return state.filter(item => item.id !== payload);
		},
		mudarQuantidade: (state, { payload }) => {
			const { quantidade, id } = payload;
			state = state.map(itemNoCarrinho => {
				if (itemNoCarrinho.id === id) {
					itemNoCarrinho.quantidade += quantidade;
					return itemNoCarrinho;
				}

			})
		},
		resetCarrinho: () => initialState
	}
})

export const {
	mudarCarrinho,
	mudarQuantidade,
	resetCarrinho
} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
