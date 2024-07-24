import React from 'react';
import { useFetch } from '../utils';
import { DELETE_PRODUCT_BY_ID } from '../constants';
import Button from '@codegouvfr/react-dsfr/Button';
import { ModifyDeleteButtonsProps } from '../interfaces';
import { useRouter } from 'next/navigation';

export const ModifyDeleteButtons: React.FC<ModifyDeleteButtonsProps> = ({
	product,
}) => {
	const router = useRouter();

	const handleDelete = async (id: number) => {
		await useFetch({
			url: DELETE_PRODUCT_BY_ID + `?product_id=${id}`,
			method: 'DELETE',
		});

		router.push('/');
	};

	return (
		<div className="fr-grid-row fr-grid-row--right">
			<Button
				iconId="fr-icon-ball-pen-fill"
				priority="tertiary no outline"
				title="Modifier"
				linkProps={{
					href: `/products/${product.id}/edit`,
				}}
			/>
			<Button
				iconId="fr-icon-delete-fill"
				priority="tertiary no outline"
				title="Supprimer"
				onClick={() => handleDelete(product.id)}
			/>
		</div>
	);
};
