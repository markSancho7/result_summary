import style from './subcontainer.module.css';
const Subcontainer = props => {
	return <div className={style.size}>{props.children}</div>;
};

export default Subcontainer;
