import { useState, useEffect } from "react";

const Gallery = (props) => {
  let [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const editHandler = (item) => {
    item['name']='Raj';
    editPhotosHandler(item);
  };

  const deletePhotosHandler = (id) => {
    fetch(`https://arasee-2db37-default-rtdb.firebaseio.com/contacts/${id}.json/`, {
      method: "DELETE"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        refreshFn();
        return data;
      });
  };
  
  const editPhotosHandler = (data) => {
    fetch(`https://arasee-2db37-default-rtdb.firebaseio.com/contacts/${data.id}.json/`, {
      method: "PUT",
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        refreshFn();
        return data;

      });
  };

  const refreshFn=()=>{
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
            photos.push(obj);
          }
          setPhotos(photos);
        });
  }

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
            photos.push(obj);
          }
          setPhotos(photos);
        });
    }
    Load();
  }, []);

  return (
    <>
      {/* <button className="btn btn-primary" onClick={fetchPhotosHandler}>
        Fetch Details
      </button> */}
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
                  <button
                    className="btn btn-primary"
                    onClick={() => editHandler(item)}
                  >
                    Edit Details
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={()=>deletePhotosHandler(item.id)}
                  >
                    Delete Details
                  </button>
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
