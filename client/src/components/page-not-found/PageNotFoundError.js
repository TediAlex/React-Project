//Import Style
import styles from './PageNotFoundError.module.css';
// Import Default
import { useNavigate } from 'react-router-dom';
export const PageNotFoundError = () => {
    const navigate = useNavigate();
  return (
    <div className={styles["container-notFound"]}>
      <h1>Oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might be removed or temporarily unavailable
      </p>
      <button onClick={()=> navigate("/")}>GOTO HOMEPAGE</button>
    </div>
  );
};
