import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onClick}) => {
    return (
        <button className={css.button} onClick={onClick}>Load More</button>
    );
}

export default LoadMoreBtn;