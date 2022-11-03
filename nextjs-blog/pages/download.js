import Image from "next/image";

export default function Downlaod() {
  return (
    <div className="main-download">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col download-text-container">
            <div className="download-main-text">
              <div className="download-heading">
                Download apps for
                <br /> Exciting Deals
              </div>
              <div className="download-text my-2">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, set do
              </div>

              <div className="image-container">
                <Image
                  src="/google-play-badge.png"
                  alt="food"
                  width={165}
                  height={60}
                  className="googleplay-image"
                />
                <Image
                  src="/app-store.png"
                  alt="food"
                  width={145}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-12 download-image-main-container"
            style={{ zIndex: "0" }}
          >
            <Image
              src="/home-3-inner-rev-2-img-2-1.png"
              alt="food"
              width={420}
              height={680}
              className="download-outer-image"
            />

            <div className="download-image-container" style={{ zIndex: "1" }}>
              <Image
                src="/Product-page.png"
                alt="food"
                width={270}
                height={530}
                className="download-inner-image"
              />
            </div>
            <div className="download-image-container">
              <Image
                src="/pngtree.png"
                alt="food"
                width={320}
                height={400}
                style={{ transform: "45deg", zIndex: "-1" }}
                className="download-inner-image pngtree"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
