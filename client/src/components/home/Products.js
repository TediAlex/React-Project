// Import component
import { ProductsItems } from './ProductsItems'
export const Products = (props) => {
  return (
    <section   className="dark-content ">
      <div   className="container">
        <div   className="row">
          <div   className="col-md-12">
            <div   className="section-header">
              <h2   className="section-title">Our Lovely Portfolio</h2>
              <p   className="section-desc">
                Everything you need to create a professional website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div   className=" container">
        <div   className="row">
          <ProductsItems 
          category={'Mobile Ready'}
          title={'Compass Template'}
          image={'images/includes/project2.jpg'}
          />
            <ProductsItems 
          category={'Dashboard Template'}
          title={'Visual Admin'}
          image={'images/includes/project1.jpg'}
          />
            <ProductsItems 
          category={'Responsive Design'}
          title={'Awesome Theme'}
          image={'images/includes/project3.jpg'}
          />
          

          
        </div>
      </div>
    </section>
  );
};
