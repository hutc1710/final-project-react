import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ModalCard from "../../components/ModelCard";

//Import css
import "../../css/AllReviewsPage.css";
import "../../css/card.css";

const AllReviews = () => {
  const [cardsArr, setCardsArr] = useState([]);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({});

  // Request for all the reviews
  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then((response) => {
        setCardsArr(response.data);
      })
      .catch((err) => {
        if (err.response) {
          //error from server
          toast.error(err.response.data);
        } else if (err.request) {
          //error if server not responding
          toast.error("Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      });
  }, []);

  //When modal closed
  const handleClose = () => {
    setShow(false);
    setProduct({});
  };

  //When modal open
  const handleShow = (e) => {
    //Request for the product by id
    axios
      .get("cards/myCard", { headers: { "id-card": e.target.id } })
      .then((res) => {
        setProduct(res.data);
        setShow(true);
      })
      .catch((err) => {
        if (err.response) {
          //error from server
          toast.error(err.response.data);
        } else if (err.request) {
          //error if server not responding
          toast.error("Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  //When user clicked on add to favorite
  const handleFavorite = (productId) => {
    axios
      .patch("cards/addFavorite", { cardId: productId })
      .then((res) => {
        toast(res.data);
      })
      .catch((err) => {
        if (err.response) {
          //error from server
          toast.error(err.response.data);
        } else if (err.request) {
          //error if server not responding
          toast.error("Something went wrong");
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <>
      {cardsArr.length > 0 ? (
        <div>
          <h5 className="reviewsHeader">All the Reviews</h5>

          <div className="cardsWrapper row row-cols-1 row-cols-md-4 g-4">
            {cardsArr.map((item) => {
              return (
                <div className="card" key={item._id}>
                  <img
                    className="productPic"
                    src={item.image}
                    alt="Product pic"
                  />
                  <p className="card-text">
                    {" "}
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p className="card-text">
                    {" "}
                    <strong>Price paid:</strong> {item.price}$
                  </p>
                  <button
                    className="btn btnShowMore"
                    onClick={handleShow}
                    id={item._id}
                  >
                    Show more
                  </button>
                </div>
              );
            })}

            <ModalCard
              handleClose={handleClose}
              handleFavorite={handleFavorite}
              product={product}
              show={show}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <h4>There are no Reviews yet </h4>
        </div>
      )}
    </>
  );
};

export default AllReviews;
