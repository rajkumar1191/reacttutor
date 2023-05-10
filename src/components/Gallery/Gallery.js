import { useState, useEffect } from "react";

const Gallery = () => {
  let [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhotosHandler = () => {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     return data;
    //   });
    // https://arasee-2db37-default-rtdb.firebaseio.com

    fetch("https://arasee-2db37-default-rtdb.firebaseio.com/contacts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    async function Load() {
      setLoading(true);
      fetch("https://arasee-2db37-default-rtdb.firebaseio.com/contacts.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setLoading(false);
        let photos = [];
          for (let key in data) {
            console.log(key);
            let obj = {
              id: key,
              name: data[key].name,
              age: data[key].age,
              loc: data[key].loc,
            };
            photos.push(obj)
          }
          setPhotos(photos);
        });
    }
    Load();
  }, []);

  return (
    <>
      <button className="btn btn-primary" onClick={fetchPhotosHandler}>
        Fetch Details
      </button>
      <div className="container">
        <div className="row">
          {photos &&
            photos.map((item) => {
              return (
                <div key={item.id} className="col-lg-3 card">
                  {/* <img src={item.url} className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.age}</p>
                    <p className="card-text">{item.loc}</p>
                  </div>
                </div>
              );
            })}
          {loading && photos.length === 0 && (
            <div className="col-lg-12">Loading...</div>
          )}
          {!loading && photos.length === 0 && (
            <div className="col-lg-12">No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
