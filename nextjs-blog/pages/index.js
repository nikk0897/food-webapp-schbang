import Image from "next/image";

export default function Home() {
  return (
    <div className="main-home">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/logo.png" alt="logo" width={100} height={40} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" id="link" href="#">
                  Menu One
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link" href="#">
                  Menu Two
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link" href="#">
                  Menu Three
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link" href="#">
                  Menu Four
                </a>
              </li>
            </ul>

            <span className="user-text">User</span>
          </div>
        </div>
      </nav>

      <div className="container main-container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="main-food-heading-container">
              <div className="main-food-heading"> Food </div>
              <div className="food-heading">
                {" "}
                Discover Restaurant <br />& Delicious Food
              </div>
            </div>
            <div className="search-bar-container">
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="search-bar"
                  placeholder="search restaurant, food"
                />
                <button className="btn" id="go-button" type="button">
                  GO{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 main-food-image-container">
            <Image
              src="/Pngtree-delicious-food.png"
              alt="food"
              width={550}
              height={550}
              className="pngtree-delicious-food img-fluid"
            />

            <div className="pngtree-lettuce-container">
              <Image
                src="/Pngtree-lettuce.png"
                alt="food"
                width={350}
                height={500}
                className="pngtree-lettuce"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="location-banner-container">
        <div className="location-banner">
          <Image
            src="/location-symbol.png"
            alt="lattuce"
            width={15}
            height={20}
            style={{ margin: "0px 10px" }}
          />
          <span>Hyderbad</span>
        </div>
      </div>

      <span className="arrow-container">
        <svg
          id="Group_4"
          data-name="Group 4"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="50"
          viewBox="0 0 85.854 50"
          className="px-1 arrow"
        >
          <g
            id="Ellipse_125"
            data-name="Ellipse 125"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          >
            <circle cx="25" cy="25" r="25" stroke="none" />
            <circle cx="25" cy="25" r="23" fill="none" />
          </g>
          <path
            id="Path_2"
            data-name="Path 2"
            d="M3786.831-4176,3776-4169.3l10.831,6.542"
            transform="translate(-3756 4193.5)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
          <path
            id="Path_9"
            data-name="Path 9"
            d="M3134.234-2661.4h-64.087"
            transform="translate(-3048.38 2685.899)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
        </svg>

        <svg
          className="px-1 arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="50"
          viewBox="0 0 85.854 50"
        >
          <g
            id="Group_3"
            data-name="Group 3"
            transform="translate(-1207.146 -1938)"
          >
            <g
              id="Ellipse_125"
              data-name="Ellipse 125"
              transform="translate(1243 1938)"
              fill="none"
              stroke="#fff"
              stroke-width="4"
            >
              <circle cx="25" cy="25" r="25" stroke="none" />
              <circle cx="25" cy="25" r="23" fill="none" />
            </g>
            <path
              id="Path_2"
              data-name="Path 2"
              d="M3776-4176l10.831,6.7L3776-4162.761"
              transform="translate(-2513.831 6131.5)"
              fill="none"
              stroke="#fff"
              stroke-width="4"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M3070.146-2661.4h64.087"
              transform="translate(-1863 4623.899)"
              fill="none"
              stroke="#fff"
              stroke-width="4"
            />
          </g>
        </svg>
      </span>
    </div>
  );
}
