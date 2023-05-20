import { doc, getDoc } from "firebase/firestore";

export const createProductAdaptedFromFirestore =(product)=>{
    console.log('4 ingrese a createProductAdaptedFromFirestore con la data sin cocinar',doc
    );

    const fields = doc.data();
    console.log('5 la data cocinada,lista para ser adaptada al modelo',
    fields);

    const ProductAdapted= {
        id: doc.id,
        name: fields.name,
        picture:fields.picture,
        price: fields.price,
        description:fields.description,
    };

    return ProductAdapted;
};

export default createProductAdaptedFromFirestore;