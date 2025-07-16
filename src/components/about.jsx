export const About = (props) => {

  const aboutImages = [
    "img/about1.png"
  ];

  return (
    <div id="about">
    <div className="container text-center">
      <div className="about-text">
              <h2><u>Quality & HSE</u></h2>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
        
            <img
              src={aboutImages}
              alt="About section"
              className="about-img"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
           
              </div>
  );
};
