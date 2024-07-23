export interface Product {
	title: string,
	desc: string,
	id: number
}

export interface fetchProps {
	url: string,
	method?: string,
	headers?: HeadersInit | undefined,
	body?: string
}

export interface ProductsListProps {
	products: Product[],
	setProducts: React.Dispatch<React.SetStateAction<Product[]>>
	setDeletedProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export interface UndoRedoButtonsProps {
	setProducts: React.Dispatch<React.SetStateAction<Product[]>>
	setDeletedProducts: React.Dispatch<React.SetStateAction<Product[]>>
	setRedoProducts: React.Dispatch<React.SetStateAction<Product[]>>
	undoDisability: boolean
	redoDisability: boolean
}

export interface ModifyDeleteButtonsProps {
	product: Product
}