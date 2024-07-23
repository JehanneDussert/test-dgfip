"use client";

import React, { useEffect, useState } from 'react'
import { GET_ALL_PRODUCTS } from '../../../constants';
import { Product } from '../../../interfaces';
import { useRouter } from 'next/navigation';
import Button from '@codegouvfr/react-dsfr/Button';
import { Input } from "@codegouvfr/react-dsfr/Input";
import { useFetch } from '../../../utils';

export default function EditView({ params }: {params: {productId: number }}) {
  const	[product, setProduct] = useState<Product>({ title: '', desc: '', id: -1});
  const	router = useRouter();

	useEffect(() => {
		const	getProductData = async() => {
			const   data = await useFetch({ url: GET_ALL_PRODUCTS + `/${params.productId}`, method: 'GET' });
			
			setProduct(data);
		}
		getProductData();
	}, [])

	const updateProduct = async() => {
		await useFetch({
			url: GET_ALL_PRODUCTS + `/${params.productId}`,
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ...product }) 
		});

		router.push(`/products/${product?.id}`);
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProduct((prevProduct) => ({
			...prevProduct,
			[e.target.name]: e.target.value
		}));
	}

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setProduct((prevProduct) => ({
			...prevProduct,
			[e.target.name]: e.target.value
		}));
	}

  return (
		<div className='fr-grid-col'>
            <Button
                iconId="fr-icon-save-fill"
                onClick={updateProduct}
                priority="tertiary no outline"
                title="Modifier"
			/>
			<Input
				label="Nom du produit"
				nativeInputProps={{
					name: 'title',
					value: product?.title,
					onChange: handleInputChange
				}}
			/>
			<Input
				label="Résumé du produit"
				textArea
				nativeTextAreaProps={{
					name: 'desc',
					value: product?.desc,
					onChange: handleTextAreaChange
				}}
			/>
			{/* <Input
				label="Description du produit"
				textArea
				nativeTextAreaProps={{
					name: 'desc',
					value: product?.desc,
					onChange: handleChange
				}}
			/> */}
		</div>
	)
}