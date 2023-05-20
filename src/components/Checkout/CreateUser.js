import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/firebaseConfig";

// Función para crear un nuevo usuario y obtener su ID
const createUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    return docRef.id; // Devuelve el ID del nuevo documento creado
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    return null;
  }
};

// Ejemplo de uso
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  telefono:'123456789'
};

createUser(userData)
  .then((userId) => {
    if (userId) {
      // El usuario se creó correctamente, puedes continuar con el proceso de compra
      // y utilizar el `userId` en el formulario de checkout.
      console.log("ID del usuario:", userId);
    } else {
      // Hubo un error al crear el usuario
      console.log("No se pudo crear el usuario.");
    }
  })
  .catch((error) => {
    console.error("Error al crear el usuario:", error);
  });

  export default createUser;
