import Image from "next/image";

export default function Service() {
  return (
    <div className="main-service">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4 col-12 service-heading-container">
            <div className="service-heading">
              <div>
                Our <br />
                Srvices
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12 service-main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, do
            eiusmod tempor incididunt, ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrad exercitation
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="col-md-7 col-12">
            <div className="row meeting-container">
              <div className="col-12 col-md-6 text-center">
                <div className="bg-dark-pink service-image-container img-fluid">
                  <Image
                    src="/meeting.png"
                    alt="food"
                    width={155}
                    height={160}
                    className="service-image"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 padding">
                <div className="service-text1">advance table booking</div>
                <div className="service-text2">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="25"
                  viewBox="0 0 148.385 29.975"
                  className="indicator1"
                >
                  <g
                    id="Group_53"
                    data-name="Group 53"
                    transform="translate(-1333.353 -1679.203)"
                  >
                    <g
                      id="Group_54"
                      data-name="Group 54"
                      transform="translate(2673.168 3667.394) rotate(180)"
                    >
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M3776-4176l21.032,13-21.032,12.7"
                        transform="translate(-2462.01 6136.343)"
                        fill="#fff"
                        stroke="#fe043c"
                        stroke-width="5"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M3070.146-2661.4H3210.89"
                        transform="translate(-1878.716 4635.335)"
                        fill="#fff"
                        stroke="#fe043c"
                        stroke-width="5"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <div className="row dish-container">
              <div className="col-12 col-md-6 padding">
                <div className="service-text1">Food for free 24/7</div>
                <div className="service-text2">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="25"
                  viewBox="0 0 148.385 29.975"
                  className="indicator2"
                >
                  <g
                    id="Group_55"
                    data-name="Group 55"
                    transform="translate(0 2.14)"
                  >
                    <g id="Group_54" data-name="Group 54">
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M0,25.708l21.032-13L0,0"
                        transform="translate(122.559)"
                        fill="#fff"
                        stroke="#fe043c"
                        stroke-width="5"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M0,0H140.744"
                        transform="translate(0 12.115)"
                        fill="#fff"
                        stroke="#fe043c"
                        stroke-width="5"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="col-12 col-md-6 text-center">
                <div className="bg-dark-pink service-image-container img-fluid">
                  <Image
                    src="/dish.png"
                    alt="food"
                    width={165}
                    height={165}
                    className="service-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 bg-dark-pink scooter-section padding">
            <div className="text-center img-fluid scooter-image">
              <Image src="/scooter.png" alt="food" width={165} height={150} />

              <div className="service-text1">
                free home delivery at your door steps
              </div>
              <div className="service-text2">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
