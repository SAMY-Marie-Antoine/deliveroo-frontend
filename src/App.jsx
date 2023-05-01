import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();
  // State qui me permet de savoir si la réponse du serveur est arrivée ou pas encore.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // La fonction du useEffect ne peut pas être asynchrone, je déclare donc une fonction asynchrone à l'intérieur et je l'appelle immédiatement
    const fetchData = async () => {
      try {
        // Je fais une requête axios et j'attend que le résultat arrive

        const response = await axios.get(
          "https://site--deliveroo-backend--cww2rdtxz68t.code.run/"
        );
        // Je stocke le résultat dans mon state data
        console.log("retour data", response.data);
        setData(response.data);
        // Je fais paser isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // J'apelle immédiatement ma fonction fetchData
    fetchData();
  }, []);

  console.log("mon composant se render");

  // Si isLoading === true, c'est que la réponse du serveur n'est pas encore arrivée, donc j'affiche loading... afin d'éviter d'avoir une erreur car data est undefined.
  return (
    <div className="app">
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <section>
            <div>
              <p>{data.restaurant.name}</p>
              <p>{data.restaurant.description}</p>
              <p>
                <img src={data.restaurant.picture} />
              </p>
            </div>

            {/* 1 ère Affichage */}
            <div>
              <p>{data.categories[0].name}</p>
            </div>
            <div>
              <p>{data.categories[0].meals[0].title}</p>
              <p>{data.categories[0].meals[0].description}</p>
              <p>{data.categories[0].meals[0].price}</p>
              <p>
                <img src={data.categories[0].meals[0].picture} />
              </p>
            </div>
            <div>
              <p>{data.categories[0].meals[1].title}</p>
              <p>{data.categories[0].meals[1].description}</p>
              <p>{data.categories[0].meals[1].price}</p>
              <p>
                <img src={data.categories[0].meals[1].picture} />
              </p>
            </div>

            {/* 2ème Affichage */}

            <div>
              <p>{data.categories[1].name}</p>
            </div>
            <div>
              <p>{data.categories[1].meals[0].title}</p>
              <p>{data.categories[1].meals[0].description}</p>
              <p>{data.categories[1].meals[0].price}</p>
            </div>
            <div>
              <p>{data.categories[1].meals[1].title}</p>
              <p>{data.categories[1].meals[1].price}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
