import { useParams } from "react-router-dom";
import { UseFetch } from "./fetchData/UseFetch";
import { useEffect, useState } from "react";
function Detail() {
  const { name } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await UseFetch();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {data.map(
        (d) =>
          d.name === name && (
            <div key={d.id} className="mt-5 d-flex ">
              <div>
                <img
                  src={d.src}
                  className="rounded"
                  style={{ width: "300px", height: "400px" }}
                  alt=""
                />
              </div>
              <div className="card p-3 d-flex flex-column justify-content-between">
                <h2>{d.name}</h2>
                <h3>Rating : {d.rating} </h3>
                <p>Price : {d.price} $</p>
                <div>
                  <span style={{cursor:'pointer'}} className=" fs-3 d-flex justify-content-end">
                    <ion-icon name="heart-outline"></ion-icon>
                  </span>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Detail;
