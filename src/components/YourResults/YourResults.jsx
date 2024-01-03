import style from './yourResults.module.css';

const YourResults = props => {
	return (
		<div
			className={`${style.size} ${style.colorBackGround}  ${style.fontColor}`}
		>
			<h3>{props.title}</h3>
			<div className={style.backPuntuation}>
				<p className={`${style.xlSize} `}>{props.puntuation}</p>
				<p>{props.totalPuntuation}</p>
			</div>
			<h2>{props.calification}</h2>
			<p>{props.description}</p>
		</div>
	);
};

export default YourResults;
