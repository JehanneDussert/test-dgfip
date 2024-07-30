import React from 'react';
import { useFetch } from '../hooks/hooks';
import {
	UPDATE_REDO_PRODUCT,
	UPDATE_RESTORE_PRODUCT,
} from '../constants/constants';
import Button from '@codegouvfr/react-dsfr/Button';
import { UndoRedoButtonsProps } from 'app/interfaces/ComponentsProps';

export const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({
	setProducts,
	setDeletedProducts,
	setRedoProducts,
	undoVisibility,
	redoVisibility,
	productId,
}) => {
	const handleRedo = async () => {
		const data = await useFetch({
			url: UPDATE_REDO_PRODUCT,
			method: 'POST',
		});

		setProducts(data.products);
		setDeletedProducts(data.deleted_products);
		setRedoProducts(data.redo_products);
	};

	const handleRestoreProducts = async (productId: number) => {
		const data = await useFetch({
			url: UPDATE_RESTORE_PRODUCT + `/${productId}`,
			method: 'POST',
		});

		setProducts(data.products);
		setDeletedProducts(data.deleted_products);
		setRedoProducts(data.redo_products);
	};

	return (
		<div>
			<Button
				iconId="fr-icon-arrow-go-back-fill"
				onClick={() => handleRestoreProducts(productId)}
				priority="tertiary no outline"
				title="Défaire"
				disabled={undoVisibility}
			/>
			<Button
				iconId="fr-icon-arrow-go-forward-fill"
				onClick={handleRedo}
				priority="tertiary no outline"
				title="Refaire"
				disabled={redoVisibility}
			/>
		</div>
	);
};
