import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        }
        else{
            setError("No such document exists")
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get document");
      }
    );
    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
