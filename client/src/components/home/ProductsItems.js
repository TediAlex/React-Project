export const ProductsItems = (props) => {
    return(
        <div   className="item col-md-4">
        <div   className="thumb-post">
          <div   className="overlay">
            <div   className="overlay-inner">
              <div   className="portfolio-infos">
                <span   className="meta-category">{props.category}</span>
                <h3   className="portfolio-title">
                  <a href="project-slideshow.html">{props.title}</a>
                </h3>
              </div>
              <div   className="portfolio-expand">
                <a
                    className="fancybox"
                  href={props.image}
                  title={props.title}
                >
                  <i   className="fa fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
    );
}