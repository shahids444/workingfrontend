import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaHeart,
  FaLocationArrow,
  FaMap,
  FaBusinessTime,
  FaPhone,
  FaUser,
  FaUserLock,
} from "react-icons/fa";

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("name");

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://workingbackend-i34e.onrender.com/api/products/search?name=${query}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map(
            (product) =>
              product.status && (
                <>
                  <div className="col-xl-12">
                    <div className="featured_listing_item_2 list_view">
                      <div className="featured_listing_item_img">
                        <img
                          src={product.image}
                          alt="listing"
                          className="img-fluid w-100"
                        />
                        {product.featured ? (
                          <a className="green" href="">
                            Featured
                          </a>
                        ) : (
                          <></>
                        )}

                        {product.verified ? (
                          <a
                            className="red"
                            style={{
                              position: "absolute",
                              left: 200,
                              width: "100px",
                            }}
                            href=""
                          >
                            Verified
                          </a>
                        ) : (
                          <></>
                        )}
                        <span className="love">
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            href=""
                          >
                            <FaHeart className="text-red-500" />
                          </a>
                        </span>
                        <a
                          className="map"
                          data-bs-toggle="modal"
                          data-bs-target="#listngPopUp-72"
                          href=""
                        >
                          <FaBusinessTime
                            className="fal fas fa-eye"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <div className="featured_listing_item_text">
                        <Link
                          to={`/listing/${product._id}`}
                          className="title"
                          href=""
                        >
                          {product.name}
                        </Link>
                        <ul>
                          <li>
                            <FaPhone
                              className="fas fa-phone-alt"
                              style={{ margin: "5px" }}
                              aria-hidden="true"
                            />
                            Call : {product.contact}
                          </li>
                          <li>
                            <FaLocationArrow
                              className="fas fa-map-marker-alt"
                              aria-hidden="true"
                            />{" "}
                            {product.location}
                          </li>
                        </ul>
                        {product.featured ? (
                          <a className="future_verify" href="">
                            <FaHeart
                              style={{ margin: "5px" }}
                              className="far fa-star"
                              aria-hidden="true"
                            />
                            Featured
                          </a>
                        ) : (
                          <></>
                        )}
                        {product.verified ? (
                          <a className="future_verify red" href="">
                            <FaUser
                              style={{ margin: "5px" }}
                              className="far fa-check"
                              aria-hidden="true"
                            />
                            Verified
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
