import db from "../Config/firebaseConfig";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    query,
    where,
    orderBy,
    doc,
    useForm,
    batch,

}
 from 'firebase/firestore';
import { createProductAdaptedFromFirestore } from "../Adapters/ProductAdapters";

export const getProduct = async () => {
    const collectionRef = doc(db, 'products');
    console.log('1-creo colleccionRef', collectionRef);

    const queryRef = query(collectionRef);
    console.log('2 creo la query', queryRef);

    const queryResult = await getDocs(queryRef);
    console.log('3 ejecuto la query', queryRef.docs.length);

    const ProductAdapted = queryResult.docs.map((doc) =>
        createProductAdaptedFromFirestore(doc)
    );

    console.log('tengo los resultados mapeados', ProductAdapted);

    return ProductAdapted;
};

export const getProductById = async (id) => {
    const docRef = doc(db, 'producto', id);
    console.log('1 creo docRef', docRef);

    const ProductoSnapshot = await getDoc(docRef);
    console.log('2 ejecuto getDoc', ProductoSnapshot);

    const ProductAdapted = createProductAdaptedFromFirestore(ProductoSnapshot);
    console.log('3 convertir el documento en objeto adaptado', ProductAdapted);

    return ProductAdapted;
};

const updateMultipleDocuments = async () => {
    const collectionRef = collection(db, "myCollection");
    const docRef1 = doc(collectionRef, "document1");
    const docRef2 = doc(collectionRef, "document2");
  
    const myBatch = batch(db);
    myBatch.set(docRef1, { field1: "value1" });
    myBatch.set(docRef2, { field2: "value2" });
  
    await myBatch.commit();
  };
  export const getCategories = async () => {
    const collectionRef = collection(db, 'categories');
    const queryRef = query(collectionRef);
    const queryResult = await getDocs(queryRef);
  
    const categories = queryResult.docs.map((doc) => doc.data());
  
    return categories;
  };
  
  export { db, updateMultipleDocuments };

 
  
