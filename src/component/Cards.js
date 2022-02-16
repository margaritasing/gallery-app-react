import { useFetchImage } from "../hooks/useFetchImage";
import Card from "./Card";
import FormImg from "./FormImg";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImage();
  return (
    <div className="cards text-center">
      <hr />
      <FormImg handleSubmit={handleSubmit} />
      <hr />
      {loading && <Loading />}
      <div className="row">
        {images.map((img) => {
          return (
            <div className="col">
              <Card key={img.id} img={img.urls.regular} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
