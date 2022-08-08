export const TeamList = () => {
  return (
    <section  className="light-content our-team">
      <div  className="container">
        <div  className="row">
          <div  className="col-md-12">
            <div  className="section-header">
              <h2  className="section-title">Meet our happy staff</h2>
              <p  className="section-desc">
                Medigo is the automated way to keep track of what everyone is
                working on.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div  className="team-members">
        <div  className="container">
          <div  className="row">
            <div  className="col-md-4 col-sm-4">
              <div  className="team-member">
                <div  className="thumb-post">
                  <img src="images/includes/member1.jpg" alt="" />
                  <span  className="member-role">Marketing Manager</span>
                </div>
                <div  className="member-content">
                  <h4  className="member-name">Amy Groovy</h4>
                  <p>
                    Duis vitae consequat neque. Nulla pharetra eleifend nulla.{' '}
                  </p>
                </div>
              </div>
            </div>

            <div  className="col-md-4 col-sm-4">
              <div  className="team-member">
                <div  className="thumb-post">
                  <img src="images/includes/member2.jpg" alt="" />
                  <span  className="member-role">Web Developer</span>
                </div>
                <div  className="member-content">
                  <h4  className="member-name">Candy Sharp</h4>
                  <p>
                    Duis vitae consequat neque. Nulla pharetra eleifend nulla.{' '}
                  </p>
                </div>
              </div>
            </div>

            <div  className="col-md-4 col-sm-4">
              <div  className="team-member">
                <div  className="thumb-post">
                  <img src="images/includes/member3.jpg" alt="" />
                  <span  className="member-role">Graphic Designer</span>
                </div>
                <div  className="member-content">
                  <h4  className="member-name">Linda Master</h4>
                  <p>
                    Duis vitae consequat neque. Nulla pharetra eleifend nulla.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
